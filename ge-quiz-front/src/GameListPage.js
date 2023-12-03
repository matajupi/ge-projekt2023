import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const GameListPage = (props) => {
    const [games, setGames] = React.useState([]);
    const navigate = useNavigate();

    const handleClick = (gameId) => {
        props.setGameId(gameId);
        navigate(`..${props.baseName}/join-game`);
    };

    React.useEffect(() => {
        props.setTitle("Games");
        axios.get(`https://${props.hostName}/games`).then((res) => {
            setGames(res.data);
        });
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <List>
        {
            games
            .filter((game) => !game.running)
            .map((game) => (
                <ListItem disablePadding key={game.id}>
                    <ListItemButton
                        component={Link}
                        to="/join-game"
                        onClick={() => handleClick(game.id)}
                    >
                        <ListItemText
                            primary={game.id}
                            secondary={`Created by ${game.organizer}, Participants: ${game.players.length}`}
                        />
                    </ListItemButton>
                </ListItem>
            ))
        }
        </List>
    );
};

export default GameListPage;
