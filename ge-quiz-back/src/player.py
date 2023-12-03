import json
import asyncio

from collections import deque


class Player:
    def __init__(self, _name, _sid, _ws):
        self.name = _name
        self.score = 0
        self.role = ""

        self.sid = _sid
        self.ws = _ws
        self.send_message_buffer = deque()
        self.receive_message_buffer = deque()


    async def update_ws(self, ws):
        if self.ws:
            await self.ws.close()
        self.ws = ws

        while len(self.send_message_buffer):
            await self.ws.send_text(self.send_message_buffer.popleft())


    async def update(self, game):
        message = json.dumps(game.to_dict())
        if self.ws == None:
            self.send_message_buffer.append(message)
            return

        await self.ws.send_text(message)


    async def listen_blocking(self):
        while len(self.receive_message_buffer) == 0:
            await asyncio.sleep(1)

        return json.loads(self.receive_message_buffer.popleft())


    def add_message(self, message):
        self.receive_message_buffer.append(message)


    def to_dict(self):
        return { "name": self.name, "score": self.score, "role": self.role }


