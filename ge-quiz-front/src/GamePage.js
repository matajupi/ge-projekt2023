import * as React from "react";

import StandbyPage from "./StandbyPage";
import RolePage from "./RolePage";
import QandAPage from "./QandAPage";
import QAnswerPage from "./QAnswerPage";
import IdentifyPage from "./IdentifyPage";
import IAnswerPage from "./IAnswerPage";
import ScorePage from "./ScorePage";
import RankingPage from "./RankingPage";

const GamePage = (props) => {
    const [game, setGame] = React.useState(null);
    const sockRef = React.useRef();

    React.useEffect(() => {
        props.setTitle(props.gameId);

        const ws = new WebSocket(`ws://${props.hostName}/players`);
        ws.addEventListener("open", (event) => {
            ws.send(JSON.stringify({ player_name: props.playerName, game_id: props.gameId }));
        });
        ws.addEventListener("message", (event) => {
            const message = JSON.parse(event.data);
            // TODO: Treat SID (Future work)
            setGame(message);
        });
        sockRef.current = ws;
        return () => {
            ws.close();
        };
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const info = {...props, game: game, setGame: setGame, ref: sockRef };

    let component = (<></>);
    if (game) {
        switch (game.state) {
            case "standby":
                component = <StandbyPage {...info} />;
                break;
            case "role":
                component = <RolePage {...info} />;
                break;
            case "q-and-a":
                component = <QandAPage {...info} />;
                break;
            case "qanswer":
                component = <QAnswerPage {...info} />;
                break;
            case "identify":
                component = <IdentifyPage {...info} />;
                break;
            case "ianswer":
                component = <IAnswerPage {...info} />;
                break;
            case "score":
                component = <ScorePage {...info} />;
                break;
            case "ranking":
                component = <RankingPage {...info} />;
                break;
            default:
                break;
        }
    }
    return component;
};

export default GamePage;
