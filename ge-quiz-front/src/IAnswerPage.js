import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const IAnswerPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Katosan:</Typography>
                        <Typography variant="body1">A: Kosuke, B: Knuth</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">謎に乱入したやつ1:</Typography>
                        <Typography variant="body1">A: Knuth, B: Kosuke</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">謎に乱入したやつ2:</Typography>
                        <Typography variant="body1">A: Kosuke, B: Knuth</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default IAnswerPage;
