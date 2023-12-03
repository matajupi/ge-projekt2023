import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const JoinGamePage = (props) => {
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate("../game");
    };

// eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => props.setTitle("Join game"), []);

    return (
        <Grid container>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <TextField fullWidth label="Player name" variant="filled"
                value={props.playerName} onChange={
                    (event) => props.setPlayerName(event.target.value)
                }/>
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleJoin}>Join</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default JoinGamePage;
