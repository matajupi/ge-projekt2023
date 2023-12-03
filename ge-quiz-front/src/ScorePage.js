import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ReactComponent as FirstIcon } from "./icons/1st.svg";
import { ReactComponent as SecondIcon } from "./icons/2nd.svg";
import { ReactComponent as ThirdIcon } from "./icons/3rd.svg";

const ScorePage = React.forwardRef((props, ref) => {
    const [clicked, setClicked] = React.useState(false);

    const handleNext = () => {
        setClicked(true);
        ref.current?.send(JSON.stringify("next"));
    };

    let players = props.game.players.slice(2);
    players.sort((a, b) => (b.score - a.score));

    let highScore = players[0].score;
    let position = 1;

    return (
        <Grid container sx={{ direction: "column" }}>
        {
            players.map((p) => (
                <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                    <Card>
                        <CardContent>
                            <Stack direction="row">
                            {
                                (() => {
                                    if (p.score < highScore) {
                                        highScore = p.score;
                                        position++;
                                    }
                                    if (position === 1) {
                                        return (
                                <FirstIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                                        );

                                    }
                                    if (position === 2) {
                                        return (
                                <SecondIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                                        );
                                    }
                                    if (position === 3) {
                                        return (
                                <ThirdIcon style={{ marginTop: 3, width: 20, height: 20 }} />
                                        );
                                    }
                                    return (<></>);
                                })()
                            }
                                <Typography variant="subtitle1" sx={{ ml: 1 }}>{p.name}</Typography>
                            </Stack>
                            <Typography variant="body1">{p.score} points</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleNext} disabled={clicked}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default ScorePage;

