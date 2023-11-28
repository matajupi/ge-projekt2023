import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { Link } from "react-router-dom";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        component={Link}
                        to="/"
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const QuestionAnswerHistoryList = () => {
    return (
        <List
            sx={{ width: "100%" }}
            subheader={<ListSubheader>Q&A History</ListSubheader>}
        >
            <ListItem>
                <ListItemText
                    primary={
                        <>
                            <Typography>Q. Which do you like cat or dog?</Typography>
                            <Typography>A. Ofcourse, I like dog better than cat.</Typography>
                        </>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary={
                        <>
                            <Typography>Q. What foods do you like to eat to breakfast?</Typography>
                            <Typography>A. I like bread.</Typography>
                        </>
                    }
                />
            </ListItem>
        </List>
    );
};

const DetectForm = () => {
    const handleClick = () => {
        // TODO:
    };
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-start" }}>
                    <Grid item>
                        <FormControl>
                            <FormLabel>Players</FormLabel>
                            <RadioGroup
                                defaultValue="A"
                            >
                                <FormControlLabel value="A" control={<Radio />} label="Arisa" />
                                <FormControlLabel value="B" control={<Radio />} label="Elise" />
                                <FormControlLabel value="C" control={<Radio />} label="Saya" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleClick}>
                            Detect
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const DetectPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <BackButton />
            </Grid>
            <Grid item xs={12}>
                <QuestionAnswerHistoryList />
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
                <DetectForm />
            </Grid>
        </Grid>
    );
};

export default DetectPage;
