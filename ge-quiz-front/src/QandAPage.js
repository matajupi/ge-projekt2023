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

const QandAPage = () => {
    return (
        <Grid container sx={{ direction: "column" }}>
            <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">
                            Question1
                        </Typography>
                        <Typography variant="body1">
                            What did you like to do when you were a child?
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
                                <FormControlLabel value="A" control={<Radio />} label={
                                    <Card>
                                        <CardContent>
                                        <Typography variant="subtitle1">Soccer</Typography>
                                        <img src="/images/q1/1.jpg" width={200} />
                                        </CardContent>
                                    </Card>
                                } />
                                <FormControlLabel value="B" control={<Radio />} sx={{ mt: 1 }} label={
                                    <Card>
                                        <CardContent>
                                            <Typography variant="subtitle1">Baseball</Typography>
                                            <img src="/images/q1/2.jpg" width={200} />
                                        </CardContent>
                                    </Card>
                                } />
                                <FormControlLabel value="C" control={<Radio />} sx={{ mt: 1 }} label={
                                    <Card>
                                        <CardContent>
                                            <Typography variant="subtitle1">Volleyball</Typography>
                                            <img src="/images/q1/3.jpg" width={200} />
                                        </CardContent>
                                    </Card>
                                } />
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

export default QandAPage;
