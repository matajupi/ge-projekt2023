import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const HomePage = (props) => {
// eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => props.setTitle("Home"), []);

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mt: 3 }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                        <Typography variant="h2"
                            sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                            Ge-Projekt
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                        <Button variant="contained" component={Link} to="/create-game">
                            Create game
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ my: 3 }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                        <Button variant="contained" component={Link} to="/games">
                            Join game
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
