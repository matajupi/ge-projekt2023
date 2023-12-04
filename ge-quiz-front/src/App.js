import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import HomePage from "./HomePage"
import CreateGamePage from "./CreateGamePage";
import GameListPage from "./GameListPage";
import JoinGamePage from "./JoinGamePage";
import GamePage from "./GamePage";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const bgImages = [
    "images/bgs/bg1.jpg",
    "images/bgs/bg2.jpg",
];

const App = () => {
    const hostName = "133.27.4.213:8002";
    const baseName = "";

    const [gameId, setGameId] = React.useState("");
    const [playerName, setPlayerName] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [bgImage, setBgImage] = React.useState(bgImages[getRandomInt(bgImages.length)]);

    const changeBgImage = () => {
        setBgImage(`${baseName}/${bgImages[getRandomInt(bgImages.length)]}`);
    };

    // TODO: if SID is valid then goto GameProcessPage with sid

    const info = {
        hostName: hostName,
        gameId: gameId, setGameId: setGameId,
        playerName: playerName, setPlayerName: setPlayerName,
        title: title, setTitle: setTitle,
        changeBgImage: changeBgImage, baseName: baseName,
    };

    return (
        <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backgroundBlendMode: "lighten",
            width: "100vw",
            minHeight: "100vh",
        }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path={`${baseName}/`} element={<HomePage {...info} />} />
                <Route path={`${baseName}/create-game`} element={<CreateGamePage {...info} />} />
                <Route path={`${baseName}/games`} element={<GameListPage {...info} />} />
                <Route path={`${baseName}/join-game`} element={<JoinGamePage {...info} />} />
                <Route path={`${baseName}/game`} element={<GamePage {...info} />} />
            </Routes>
        </div>
    );
};

export default App;
