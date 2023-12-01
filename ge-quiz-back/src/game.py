import random
import abc
import json
import asyncio

from player import SimpleCUIPlayer
from question import GE_PROJEKT_QUESTIONS, N_GAME_QUESTIONS


class Game:
    class State:
        def __init__(self):
            self.question = None
            self.qanswers = None
            self.ianswers = None


    def __init__(self):
        self.players = []

        self.turn = -1
        self.state = Game.State()


    def register(self, player):
        self.players.append(player)


    def notify_message_all(self, players, message):
        for player in players:
            player.handle_message(message)


    def get_response_all_blocking(self, players):
        responses = []
        for player in players:
            responses.append(player.listen_response_blocking())
        return responses


    def clear_state(self):
        self.state = Game.State()


    def start(self):
        assert len(self.players) >= 3

        # Choose questions
        questions = random.sample(GE_PROJEKT_QUESTIONS, N_GAME_QUESTIONS)
        # Choose answerer
        random.shuffle(self.players)

        # Init state
        self.turn = -1
        self.clear_state()

        self.notify_message_all(self.players, "game_start")

        for question in questions:
            self.turn += 1
            self.state.question = question
            self.notify_message_all(self.players, "turn_start")

            # Q&A
            self.notify_message_all(self.players[:2], "request_answer")
            qanswers = self.get_response_all_blocking(self.players[:2])

            shuffled_qanswers = qanswers[:]
            random.shuffle(shuffled_qanswers)
            self.state.qanswers = shuffled_qanswers
            self.notify_message_all(self.players, "qanswers_changed")

            if qanswers[0] == qanswers[1]:
                self.notify_message_all(self.players, "turn_end")
                self.clear_state()
                continue

            # Identify
            self.notify_message_all(self.players[2:], "request_identify")
            ianswers = self.get_response_all_blocking(self.players[2:])
            self.state.ianswers = ianswers

            # Verify answers
            for player, ianswer in zip(self.players[2:], ianswers):
                if qanswers == ianswer:
                    player.score += 1
                    player.handle_message("right")
                else:
                    player.handle_message("wrong")

            self.notify_message_all(self.players, "ianswers_changed")
            self.notify_message_all(self.players, "score_changed")
            self.notify_message_all(self.players, "turn_end")
            self.clear_state()

        self.notify_message_all(self.players, "game_end")


if __name__ == "__main__":
    game = Game()
    game.register(SimpleCUIPlayer("kosuke"))
    game.register(SimpleCUIPlayer("knuth"))
    game.register(SimpleCUIPlayer("katosan"))

    game.start()

