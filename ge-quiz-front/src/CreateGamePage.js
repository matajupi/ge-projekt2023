import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateGamePage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <TextField fullWidth label="Game ID" variant="filled" />
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <TextField fullWidth label="Player name" variant="filled" />
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained">Create</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreateGamePage;
