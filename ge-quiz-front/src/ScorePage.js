import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { ReactComponent as FirstIcon } from "./icons/1st.svg";
import { ReactComponent as SecondIcon } from "./icons/2nd.svg";
import { ReactComponent as ThirdIcon } from "./icons/3rd.svg";

// TODO: 1~3位には王冠をつけたい
const ScorePage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <FirstIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>Katosan</Typography>
                        </Stack>
                        <Typography variant="body1">30 points</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <SecondIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>謎に乱入したやつ1</Typography>
                        </Stack>
                        <Typography variant="body1">5 points</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Stack direction="row">
                            <ThirdIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>謎に乱入したやつ2</Typography>
                        </Stack>
                        <Typography variant="body1">0 points</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">謎に乱入したやつ3</Typography>
                        <Typography variant="body1">-5 points</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ScorePage;

