import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { ReactComponent as FirstIcon } from "./icons/1st.svg";
import { ReactComponent as SecondIcon } from "./icons/2nd.svg";
import { ReactComponent as ThirdIcon } from "./icons/3rd.svg";

const RankingPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <FirstIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>1st</Typography>
                        </Stack>
                        <Typography variant="body1">Katosan (30 points)</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <SecondIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>2nd</Typography>
                        </Stack>
                        <Typography variant="body1">謎に乱入したやつ1 (5 points)</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <ThirdIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>3rd</Typography>
                        </Stack>
                        <Typography variant="body1">謎に乱入したやつ2 (0 points)</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">4th</Typography>
                        <Typography variant="body1">謎に乱入したやつ3 (-3 points)</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained">Close</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RankingPage;
