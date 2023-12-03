import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateGamePage = (props) => {
    const navigate = useNavigate();

    const handleCreate = () => {
        axios.post(`http://${props.hostName}/games`, { id: props.gameId, organizer: props.playerName })
        .then((res) => {
            navigate("../game");
        });
    };

// eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => props.setTitle("Create game"), []);

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <TextField fullWidth label="Game ID" variant="filled"
                value={props.gameId} onChange={
                    (event) => props.setGameId(event.target.value)
                } />
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <TextField fullWidth label="Player name" variant="filled"
                value={props.playerName} onChange={
                    (event) => props.setPlayerName(event.target.value)
                } />
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleCreate}>Create</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreateGamePage;
