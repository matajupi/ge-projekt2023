import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const IdentifyPage = React.forwardRef((props, ref) => {
    const [selectedChoice, setSelectedChoice] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);

    const handleChoiceChange = (e) => {
        setSelectedChoice(e.target.value);
    };
    const handleSubmit = () => {
        setClicked(true);
        let ianswer;
        if (selectedChoice === "01") {
            ianswer = [props.game.shuffled_qanswers[0], props.game.shuffled_qanswers[1]];
        }
        else {
            ianswer = [props.game.shuffled_qanswers[1], props.game.shuffled_qanswers[0]];
        }
        ref.current?.send(JSON.stringify(ianswer));
    };

    React.useEffect(() => {
        for (const player of props.game.players) {
            if (player.name === props.playerName && player.role === "answerer") {
                setClicked(true);
            }
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">
                            Identify1
                        </Typography>
                        <Typography variant="body1">
                            {props.game.question.statement}
                        </Typography>
                        <Typography mt={2} variant="body1">
                            A. {props.game.question.choices[props.game.shuffled_qanswers[0]].word}
                        </Typography>
                        <Typography variant="body1">
                            B. {props.game.question.choices[props.game.shuffled_qanswers[1]].word}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Grid container sx={{ justifyContent: "flex-start" }}>
                    <Grid item>
                        <FormControl>
                            <RadioGroup
                                value={selectedChoice} onChange={handleChoiceChange}
                            >
                                <FormControlLabel value="01" control={<Radio />} disabled={clicked}
                                label={`A: ${props.game.players[0].name}, B: ${props.game.players[1].name}`} />
                                <FormControlLabel value="10" control={<Radio />} disabled={clicked}
                                label={`A: ${props.game.players[1].name}, B: ${props.game.players[0].name}`} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ m: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained" onClick={handleSubmit} disabled={clicked}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default IdentifyPage;
