import * as React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';

const QuestionArea = () => {
    return (
        <Grid container sx={{ direction: "column", p: 2, boxShadow: 3 }}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: "primary" }}>
                    Question1
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ color: "primary" }}>
                    What did you like to do when you were a child?
                </Typography>
            </Grid>
        </Grid>
    );
};

const AnswerForm = () => {
    const handleClick = () => {
        // TODO: POST CGI
        // TODO: Transition to waiting screen
    };
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-start" }}>
                    <Grid item>
                        <FormControl>
                            <RadioGroup
                                defaultValue="A"
                            >
                                <FormControlLabel value="A" control={<Radio />} label="Play games" />
                                <FormControlLabel value="B" control={<Radio />} label="Read books" />
                                <FormControlLabel value="C" control={<Radio />} label="Just sleep" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleClick}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const OpenDetectPageButton = () => {
    return (
        <Fab
            color="secondary"
            component={Link}
            to="/detect"
            sx={{
                position: "fixed",
                top: "auto",
                bottom: 0,
                left: "auto",
                right: 0,
                margin: 3,
            }}>
            <SearchIcon />
        </Fab>
    );
};

const QuestionAnswerPage = () => {
    return (
        <React.Fragment>
            <Grid container sx={{ direction: "column" }}>
                <Grid item xs={12} sx={{ m: 2 }}>
                    <QuestionArea />
                </Grid>
                <Grid item xs={12} sx={{ mx: 3 }}>
                    <AnswerForm />
                </Grid>
            </Grid>
            <OpenDetectPageButton />
        </React.Fragment>
    );
};

export default QuestionAnswerPage;
