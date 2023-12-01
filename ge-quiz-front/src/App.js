import * as React from "react";

import { Routes, Route } from "react-router-dom";

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
            </Routes>
        </div>
    );
};

export default App;
