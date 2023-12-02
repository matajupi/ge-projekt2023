import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

// TODO: Title -> Game name
// TODO: Start button appears when you are organizer
const GameDetailPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Players
                    </ListSubheader>
                }>
                    <ListItem>
                        <ListItemText primary="Kosuke" secondary="Organizer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Knuth" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Katosan" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Button variant="contained">Start</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GameDetailPage;
