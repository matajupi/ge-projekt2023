from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from typing import List

from game import Game


router = APIRouter(prefix = "/games")


# id: (game, waiting)
games = { }


@router.get("/")
def read_games(waiting: bool = False):
    return [k for k, v in games.items() if v[1] or not waiting]


class GameModel(BaseModel):
    id: str


@router.post("/")
def create_game(game: GameModel):
    if game.id in games:
        raise HTTPException(status_code = 409, detail = f"Game {game.id} already exists")
    games[game.id] = (Game(), True)
    return game


class GameDtatilModel(BaseModel):
    id: str


@router.get("/{game_id}")
def read_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    game = games[game_id]
    retval = GameDetailModel()
    retval.id = game_id
    # TODO:
    return retval


# UpdateはAnomalyが発生する恐れがあるので、実装しない


@router.delete("/{game_id}")
def delete_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    del games[game_id]
    return { "message": "Game deleted" }


@router.post("/{game_id}/start")
def start_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    game_model = games[game_id]

    if len(game_model.players) < 3:
        raise HTTPException(status_code = 400, detail = "Players must be 3 or more")
    game = Game(game_model.players)
    game.start()
    running_games[game_model.id] = game
    return { "message": "Game started" }


@router.post("/{game_id}/kill")
def kill_game(game_id: str):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    game = games[game_id]
    # TODO:


class Player(BaseModel):
    name: str


@router.post("/{game_id}/players")
def register_player(game_id: str, player: Player):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    game = games[game_id]

    if player.name in game.players:
        raise HTTPException(status_code = 409, detail = f"Player {player.name} already exists")
    game.players.append(player.name)
    return game


@router.get("/{game_id}/players/{player_name}")
def read_player_message(game_id: str, player_name: str):
    if game_id not in games:
        raise HTTPException(status_code = 404, detail = "Game not found")
    game = games[game_id]
    # TODO:

