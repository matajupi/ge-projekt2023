import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const AnswerForm = () => {
    return (
        <FormControl>
            <RadioGroup
                defaultValue="A"
            >
                <FormControlLabel value="A" control={<Radio />} label="Play games" />
                <FormControlLabel value="B" control={<Radio />} label="Read books" />
                <FormControlLabel value="C" control={<Radio />} label="Just sleep" />
            </RadioGroup>
            <Button variant="contained">Answer</Button>
        </FormControl>
    );
};

const QuestionAnswerPage = () => {
    return (
        <Box sx={{ justifyContent: "center" }}>
            <Box sx={{ m: 2, p: 2, boxShadow: 1 }}>
                <Typography variant="subtitle1" sx={{ color: "primary" }}>
                    Question1
                </Typography>
                <Typography variant="body1" sx={{ color: "primary" }}>
                    What did you like to do when you were a child?
                </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
                <AnswerForm />
            </Box>
        </Box>
    );
};

const AnswerDisplayPage = () => {
    return (
        <>
        </>
    );
};

const App = () => {
    return (
        <QuestionAnswerPage />
    );
};

export default App;
