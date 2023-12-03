import random
import abc
import json
import asyncio

from question import GE_PROJEKT_QUESTIONS, N_GAME_QUESTIONS


class Game:
    def __init__(self, _id, _organizer):
        self.id = _id
        self.organizer = _organizer

        self.players = []
        self.running = False
        self.th = None

        self.turn = -1
        self.question = None
        self.qanswers = None
        self.ianswers = None
        self.shuffled_qanswers = None

        self.state = "standby"


    def to_dict(self):
        return {
            "id": self.id,
            "organizer": self.organizer,
            "players": list(map(lambda p: p.to_dict(), self.players)),
            "running": self.running,
            "turn": self.turn,
            "question": self.question,
            "shuffled_qanswers": self.shuffled_qanswers,
            "qanswers": self.qanswers,
            "ianswers": self.ianswers,
            "state": self.state,
        }


    async def register(self, player):
        self.players.append(player)
        await self.notify_players()


    async def notify_players(self):
        for player in self.players:
            await player.update(self)


    async def get_responses_blocking(self, players):
        responses = []
        for player in players:
            response = await player.listen_blocking()
            responses.append(response)
        return responses


    async def start(self):
        assert len(self.players) >= 3

        # Choose questions
        questions = random.sample(GE_PROJEKT_QUESTIONS, N_GAME_QUESTIONS)
        # Choose answerer
        random.shuffle(self.players)
        for player in self.players[:2]: player.role = "answerer"
        for player in self.players[2:]: player.role = "detective"

        self.running = True
        self.state = "role"
        await self.notify_players()
        await self.get_responses_blocking(self.players)

        for question in questions:
            self.turn += 1
            self.question = question
            self.state = "q-and-a"
            await self.notify_players()

            qanswers = await self.get_responses_blocking(self.players[:2])
            self.qanswers = qanswers

            shuffled_qanswers = qanswers[:]
            random.shuffle(shuffled_qanswers)
            self.shuffled_qanswers = shuffled_qanswers

            self.state = "qanswer"
            await self.notify_players()
            await self.get_responses_blocking(self.players)

            if qanswers[0] == qanswers[1]:
                self.state = "score"
                await self.notify_players()
                await self.get_responses_blocking(self.players)
                continue

            # Identify
            self.state = "identify"
            await self.notify_players()

            ianswers = await self.get_responses_blocking(self.players[2:])
            self.ianswers = ianswers
            self.state = "ianswer"
            await self.notify_players()
            await self.get_responses_blocking(self.players)

            # Verify answers
            for player, ianswer in zip(self.players[2:], ianswers):
                if tuple(qanswers) == tuple(ianswer):
                    player.score += 1
                # TODO: 正解 or 間違えを表示するページ

            self.state = "score"
            await self.notify_players()
            await self.get_responses_blocking(self.players)

        self.state = "ranking"
        await self.notify_players()


