import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";

const RolePage = React.forwardRef((props, ref) => {
    const [clicked, setClicked] = React.useState(false);

    const handleNext = () => {
        setClicked(true);
        ref.current?.send(JSON.stringify("next"));
    };

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Answerers
                    </ListSubheader>
                }>
                {
                    props.game.players
                        .slice(0, 2)
                        .map((p) => (
                            <ListItem key={p.name}>
                                <ListItemText primary={p.name} />
                            </ListItem>
                        ))
                }
                </List>
            </Grid>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Detectives
                    </ListSubheader>
                }>
                {
                    props.game.players
                        .slice(2)
                        .map((p) => (
                            <ListItem key={p.name}>
                                <ListItemText primary={p.name} />
                            </ListItem>
                        ))
                }
                </List>
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleNext} disabled={clicked}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default RolePage;
