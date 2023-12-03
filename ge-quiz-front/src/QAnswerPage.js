import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const QAnswerPage = React.forwardRef((props, ref) => {
    const [clicked, setClicked] = React.useState(false);

    const handleNext = () => {
        setClicked(true);
        ref.current?.send(JSON.stringify("next"));
    };

    const choice0 = props.game.question.choices[props.game.shuffled_qanswers[0]];
    const choice1 = props.game.question.choices[props.game.shuffled_qanswers[1]];

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="body1">A. {choice0.word}</Typography>
                        <img src={choice0.image} alt={choice0.word} width={200} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="body1">B. {choice1.word}</Typography>
                        <img src={choice1.image} alt={choice1.word} width={200} />
                    </CardContent>
                </Card>
            </Grid>
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

export default QAnswerPage;
