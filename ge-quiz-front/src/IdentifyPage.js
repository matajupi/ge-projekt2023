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

const IdentifyPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">
                            Identify1
                        </Typography>
                        <Typography variant="body1">
                            What did you like to do when you are a child?
                        </Typography>
                        <Typography mt={2} variant="body1">
                            A. Just sleep
                        </Typography>
                        <Typography variant="body1">
                            B. Earn money
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Grid container sx={{ justifyContent: "flex-start" }}>
                    <Grid item>
                        <FormControl>
                            <RadioGroup
                                defaultValue="A"
                            >
                                <FormControlLabel value="A" control={<Radio />}
                                label="A: Kosuke, B: Knuth" />
                                <FormControlLabel value="B" control={<Radio />}
                                label="A: Knuth, B: Kosuke" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 3 }}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                    <Grid item>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default IdentifyPage;
