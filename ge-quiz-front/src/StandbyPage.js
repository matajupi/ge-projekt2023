import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StandbyPage = React.forwardRef((props, ref) => {
    const navigate = useNavigate();

    const handleStart = () => {
        axios.post(`https://${props.hostName}/games/${props.gameId}/start`);
    };
    const handleDelete = () => {
        axios.delete(`https://${props.hostName}/games/${props.gameId}`).then((res) => {
            ref.current?.close();
            // TODO: Delete SID (Future work)
            navigate(`..${props.baseName}/`);
        });
    };
    const handleLeave = () => {
        ref.current?.close();
        // TODO: Delete SID (Future work)
        navigate(`..${props.baseName}/`);
    };

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Players
                    </ListSubheader>
                }>
                {
                    props.game.players.map((player) => (
                        <ListItem key={player.name}>
                            <ListItemText primary={player.name} secondary={
                                player.name === props.game.organizer ? "Organizer" : ""
                            } />
                        </ListItem>
                    ))
                }
                </List>
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ direction: "row" }}>
                    <Grid item xs={6}>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item>
                            {
                                props.game.organizer === props.playerName ? (
                                    <Button variant="contained"
                                    disabled={props.game.players.length < 3}
                                    onClick={handleStart}>
                                        Start
                                    </Button>
                                ) : (
                                    <></>
                                )
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item>
                            {
                                props.game.organizer === props.playerName ? (
                                    <Button variant="contained" onClick={handleDelete}>
                                        Delete
                                    </Button>
                                ) : (
                                    <Button variant="contained" onClick={handleLeave}>
                                        Leave
                                    </Button>
                                )
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default StandbyPage;
