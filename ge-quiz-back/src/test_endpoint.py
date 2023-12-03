import pytest

from fastapi.testclient import TestClient

from main import app
from endpoint import games
from game import Game
from question import GE_PROJEKT_QUESTIONS


client = TestClient(app)


def test_create_game1():
    response = client.post("/games", json = {"id": "game1"})
    assert response.status_code == 200
    assert response.json() == {"id": "game1"}


def test_create_game2():
    response = client.post("/games", json = {"id": "game2"})
    assert response.status_code == 200
    assert response.json() == {"id": "game2"}


wslst = []


def test_start_game1_success():
    for i in range(4):
        wslst.append(client.websocket_connect("/games/game1/players"))

    response = client.post("/games/game1/start")
    assert response.status_code == 200


def test_start_game2_failure():
    response = client.post("/games/game2/start")
    assert response.status_code == 400


def test_game_process():
    # TODO: 
    pass


def test_read_running_games():
    response = client.get("/games")
    assert response.status_code == 200
    assert response.json() == ["game1"]


def test_read_waiting_games():
    response = client.get("/games", params = {"waiting": True})
    assert response.status_code == 200
    assert response.json() == ["game2"]


def test_read_game1_detail():
    response = client.get("/games/game1")
    assert response.status_code == 200
    rejs = response.json()
    assert rejs["id"] == "game1"
    assert rejs["turn"] == 0
    assert len(rejs["players"]) == 4
    assert rejs["question"] != None
    assert rejs["qanswers"] != None
    assert rejs["ianswers"] != None


def test_read_game2_detail()
    response = client.get("/games/game2")
    assert response.status_code == 200
    rejs = response.json()
    assert rejs["id"] == "game2"
    assert rejs["turn"] == -1
    assert len(rejs["players"]) == 0
    assert rejs["question"] == None
    assert rejs["qanswers"] == None
    assert rejs["ianswers"] == None


# TODO: Test delete
