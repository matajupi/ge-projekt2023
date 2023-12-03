import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const IAnswerPage = React.forwardRef((props, ref) => {
    const [clicked, setClicked] = React.useState(false);

    const handleNext = () => {
        setClicked(true);
        ref.current?.send(JSON.stringify("next"));
    };

    return (
        <Grid container sx={{ direction: "column" }}>
        {
            props.game.ianswers
            .map((ians, i) => (
                <Grid item xs={12} sx={{ mx: 3, mt: 3 }} key={i}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">
                                {props.game.players[i + 2].name}:
                            </Typography>
                            <Typography variant="body1">
                            {props.game.players[0].name}: {props.game.question.choices[ians[0]].word}
                            </Typography>
                            <Typography variant="body1">
                            {props.game.players[1].name}: {props.game.question.choices[ians[1]].word}
                            </Typography>
                        {
                            (ians[0] === props.game.qanswers[0]
                            && ians[1] === props.game.qanswers[1]) ? (
                            <Typography variant="body1" style={{ color: "green" }}>
                                Richtig
                            </Typography>) : (
                            <Typography variant="body1" style={{ color: "red" }}>
                                Falsch
                            </Typography>)
                        }
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

export default IAnswerPage;
