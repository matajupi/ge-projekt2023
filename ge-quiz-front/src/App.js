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
    "/images/bgs/bg1.jpg",
    "/images/bgs/bg2.jpg",
];

const App = () => {
    const hostName = "localhost:8001";

    const [gameId, setGameId] = React.useState("");
    const [playerName, setPlayerName] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [bgImage, setBgImage] = React.useState(bgImages[getRandomInt(bgImages.length)]);

    const changeBgImage = () => {
        setBgImage(bgImages[getRandomInt(bgImages.length)]);
    };

    // TODO: if SID is valid then goto GameProcessPage with sid

    const info = {
        hostName: hostName,
        gameId: gameId, setGameId: setGameId,
        playerName: playerName, setPlayerName: setPlayerName,
        title: title, setTitle: setTitle,
        changeBgImage: changeBgImage
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
                <Route path="/" element={<HomePage {...info} />} />
                <Route path="/create-game" element={<CreateGamePage {...info} />} />
                <Route path="/games" element={<GameListPage {...info} />} />
                <Route path="/join-game" element={<JoinGamePage {...info} />} />
                <Route path="/game" element={<GamePage {...info} />} />
            </Routes>
        </div>
    );
};

export default App;
