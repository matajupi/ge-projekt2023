import uvicorn
import json
import uuid
import asyncio
import threading

from fastapi import FastAPI, HTTPException, WebSocket, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# from cancelth import CancelableThread
from game import Game
from player import Player


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)
app.mount("/static", StaticFiles(directory = "../build/static"))
app.mount("/images", StaticFiles(directory = "../build/images"))

templates = Jinja2Templates(directory = "../build")


class ReadGameModel(BaseModel):
    id: str
    organizer: str
    players: List[str]
    running: bool


class CreateGameModel(BaseModel):
    id: str
    organizer: str


games = {}
players = {}


@app.get("/")
def index(request: Request):
    return templates.TemplateResponse("index.html", { "request": request })


@app.get("/games")
def read_games():
    return list(map(lambda game: ReadGameModel(
        id=game.id,
        organizer=game.organizer,
        players=list(map(lambda player: player.name, game.players)),
        running=game.running
    ), games.values()))


@app.post("/games")
def create_game(gm: CreateGameModel):
    if gm.id in games:
        raise HTTPException(status_code=409, detail="Game already exists")
    game = Game(gm.id, gm.organizer)
    games[gm.id] = game
    return gm


@app.delete("/games/{game_id}")
def delete_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code=404, detail="Game not found")

    game = games[game_id]
    # if game.running:
    #     game.th.raise_exception()
    del games[game_id]
    return { "message": "Game deleted" }


@app.post("/games/{game_id}/start")
def start_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code=404, detail="Game not found")

    game = games[game_id]
    if game.running:
        raise HTTPException(status_code=400, detail="Game is running")

    if len(game.players) < 3:
        raise HTTPException(status_code=400, detail="Not enough players")

    def run_game():
        asyncio.run(game.start())

        for player in game.players:
            del players[player.sid]
        del games[game.id]

    # th = CancelableThread(target = run_game)
    th = threading.Thread(target = run_game)
    game.th = th
    th.start()
    return { "message": "Game started" }


# TODO: SIDの関係で、Leaveをするとバグる状態である
@app.websocket("/players")
async def player_endpoint(ws: WebSocket):
    await ws.accept()
    try:
        rpm_txt = await ws.receive_text()
        rpm = json.loads(rpm_txt)
        if rpm["game_id"] not in games:
            await ws.close(code = 1007, reason = "Game not found")
            return

        # TODO: Support SID (Future work)
        sid = uuid.uuid3(uuid.uuid1(), rpm["player_name"])
        player = Player(rpm["player_name"], sid, ws)
        players[sid] = player
        await games[rpm["game_id"]].register(player)

        while True:
            message = await ws.receive_text()
            player.add_message(message)
    except:
        player.ws = None


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8002)

