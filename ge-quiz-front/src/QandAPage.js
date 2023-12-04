import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const QandAPage = React.forwardRef((props, ref) => {
    const [selectedChoice, setSelectedChoice] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);

    const handleChoiceChange = (e) => {
        setSelectedChoice(e.target.value);
    };
    const handleSubmit = () => {
        setClicked(true);
        ref.current?.send(JSON.stringify(selectedChoice));
    };

    React.useEffect(() => {
        props.changeBgImage();
        for (const player of props.game.players) {
            if (player.name === props.playerName && player.role === "detective") {
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
                            {props.game.question.statement}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 2 }}>
                <Grid container sx={{ justifyContent: "flex-start" }}>
                    <Grid item>
                        <FormControl>
                            <RadioGroup value={selectedChoice} onChange={handleChoiceChange}>
                            {
                                props.game.question.choices.map((choice, i) => (
                                    <FormControlLabel control={<Radio />} key={i}
                                    disabled={clicked} value={i} sx={{ mt: 1 }} label={
                                        <Card>
                                            <CardContent>
                                                <Typography variant="subtitle1">
                                                    {choice.word}
                                                </Typography>
                                                <img src={choice.image} alt={choice.word} width={200} />
                                            </CardContent>
                                        </Card>
                                    } />
                                ))
                            }
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

export default QandAPage;
