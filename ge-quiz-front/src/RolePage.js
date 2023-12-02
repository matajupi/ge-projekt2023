import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const RolePage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Answerers
                    </ListSubheader>
                }>
                    <ListItem>
                        <ListItemText primary="Kosuke" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Knuth" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12}>
                <List subheader={
                    <ListSubheader component="div">
                        Detectives
                    </ListSubheader>
                }>
                    <ListItem>
                        <ListItemText primary="Katosan" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
};

export default RolePage;
