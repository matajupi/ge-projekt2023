class Question:
    def __init__(self, _statement, _choices):
        self.statement = _statement
        self.choice = _choices


GE_PROJEKT_QUESTIONS = [
    Question("What color do you like?", [
        "Blue",
        "Red",
        "Green",
    ]),
    Question("What food do you like?", [
        "Sushi",
        "Udon",
        "Takoyaki",
    ]),
    Question("What season do you like?", [
        "Spring",
        "Summer",
        "Autumn",
        "Winter",
    ]),
    Question("What drink do you like?", [
        "Cola",
        "Green tea",
        "Earl grey",
        "Coffee",
    ]),
]

N_GAME_QUESTIONS = 3

