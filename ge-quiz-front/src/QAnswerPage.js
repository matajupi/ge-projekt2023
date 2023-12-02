import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const QAnswerPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="body1">A. Just sleep</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="body1">B. Earn money</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default QAnswerPage;
