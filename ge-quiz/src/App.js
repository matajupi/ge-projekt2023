import * as React from "react";

import { Routes, Route } from "react-router-dom";

import QuestionAnswerPage from "./QuestionAnswerPage";
import DetectPage from "./DetectPage";
import AnswerDisplayPage from "./AnswerDisplayPage";

const App = () => {
    return (
        <div style={{
            backgroundImage: "url(/imgs/bgImage1.jpg)",
            backgroundSize: "cover",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backgroundBlendMode: "lighten",
            height: "100vh",
            width: "100vw",
        }}>
            <Routes>
                <Route path="/" element={<QuestionAnswerPage />} />
                <Route path="/detect" element={<DetectPage />} />
                <Route path="/answer" element={<AnswerDisplayPage />} />
            </Routes>
        </div>
    );
};

export default App;
