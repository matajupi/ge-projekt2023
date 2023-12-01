import uvicorn

from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List

import games


app = FastAPI()

# TODO: ReactのデプロイされたEndpointを登録する
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)
app.mount("/static", StaticFiles(directory = "../static"))
app.include_router(games.router)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)

