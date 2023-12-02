import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MainPage from "./MainPage"
import CreateGamePage from "./CreateGamePage";
import GameListPage from "./GameListPage";
import JoinGamePage from "./JoinGamePage";
import GameDetailPage from "./GameDetailPage";
import RolePage from "./RolePage";
import QandAPage from "./QandAPage";
import QAnswerPage from "./QAnswerPage";
import IdentifyPage from "./IdentifyPage";
import IAnswerPage from "./IAnswerPage";
import ScorePage from "./ScorePage";
import RankingPage from "./RankingPage";

const App = () => {
    return (
        <div style={{
            backgroundImage: "url(/images/bgs/bg1.jpg)",
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
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/create-game" element={<CreateGamePage />} />
                <Route path="/games" element={<GameListPage />} />
                <Route path="/join-game" element={<JoinGamePage />} />
                <Route path="/game-detail" element={<GameDetailPage />} />
                <Route path="/game-role" element={<RolePage />} />
                <Route path="/q-and-a" element={<QandAPage />} />
                <Route path="/qanswer" element={<QAnswerPage />} />
                <Route path="/identify" element={<IdentifyPage />} />
                <Route path="/ianswer" element={<IAnswerPage />} />
                <Route path="/score" element={<ScorePage />} />
                <Route path="/ranking" element={<RankingPage />} />
            </Routes>
        </div>
    );
};

export default App;
