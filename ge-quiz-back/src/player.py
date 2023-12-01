import abc
import asyncio


class Player(object, metaclass = abc.ABCMeta):
    def __init__(self, _name):
        self.name = _name
        self.score = 0


    @abc.abstractmethod
    def handle_message(self, message):
        pass


    @abc.abstractmethod
    def listen_response_blocking(self):
        pass


class RemotePlayer(Player):
    def __init__(self, _name, _ws):
        super().__init__(_name)
        self.ws = _ws


    def handle_message(self, message):
        asyncio.run(ws.send_text(message))


    def listen_response_blocking(self):
        return asyncio.run(ws.receive_text())


class SimpleCUIPlayer(Player):
    def handle_message(self, message):
        print(f"[{self.name}:{self.score}]\t{message}")


    def listen_response_blocking(self):
        return input(f"[{self.name}:{self.score}]\t>>> ")

