import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const GameListPage = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Game1" secondary="Created by Kosuke, Participants: 3" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Game2" secondary="Created by Troll, Participants: 4" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default GameListPage;
