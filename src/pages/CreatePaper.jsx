import React from "react";
import Button from "react-bootstrap/Button";
import "./dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../components/text-card";
import { Box, Card, TextField } from "@material-ui/core";
import { Theme, withStyles } from "@material-ui/core/styles";
import {
  Breadcrumbs,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomStepper from "./stepper";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#EDF3F7",
    minHeight: "100vh",
  },
  input: {
    padding: '5px', // Adjust the padding value as needed
  },
});

  
export default function CreatePaper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box height={80} />
      <TextCard>
        <div>
          <Breadcrumbs separator="/" aria-label="breadcrumb">
            <Link style={{ textDecoration: "none" }} to="/">
              <b>Home</b>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/questions">
              <b>Questions Paper</b>
            </Link>
            <Typography color="textPrimary">
              <b>Generate Test paper</b>
            </Typography>
          </Breadcrumbs>
        </div>
      </TextCard>
      <CustomStepper />
      <Card style={{ margin: "20px" }} elevation={0}>
        <Typography style={{ padding: "10px", color: "#6C7781" }}>
          Class & Subject
        </Typography>
        <Grid container style={{ padding: "10px"}}>
        <Grid item>
        <TextField
        variant="outlined"
      value="Input"
      InputProps={{
        classes: {
          input: classes.input,
        },
      }}
    />
        </Grid>

        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button variant="contained" color="red">
            EDIT
          </Button>
        </Grid>
       
      </Grid>
      </Card>
      <Card style={{ margin: "20px" }} elevation={0}>
        <Grid container direction="column">
          <Grid item>
            <FormControl component="fieldset" style={{ padding: "20px" }}>
              <Typography variant="subtitle1" gutterBottom>
                Source (What is this?)
              </Typography>
              <RadioGroup defaultValue="allQuestion">
                <FormControlLabel
                  value="allQuestion"
                  control={<Radio />}
                  label="All Question"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" style={{ padding: "20px" }}>
              <Typography variant="subtitle1" gutterBottom>
                Test Paper Type (What is this?)
              </Typography>
              <RadioGroup defaultValue="Question Paper (PDF/Word)">
                <FormControlLabel
                  value="Question Paper (PDF/Word)"
                  control={<Radio />}
                  label="Question Paper (PDF/Word)"
                />

                <FormControlLabel
                  value="Worksheet (PDF/Word)"
                  control={<Radio />}
                  label="Worksheet (PDF/Word)"
                />

                <FormControlLabel
                  value="Online Test - Objective (Link)"
                  control={<Radio />}
                  label="Online Test - Objective (Link)"
                />

                <FormControlLabel
                  value="Online Test - Subjective (Link)"
                  control={<Radio />}
                  label="Online Test - Subjective (Link)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" style={{ padding: "20px" }}>
              <Typography variant="subtitle1" gutterBottom>
                Blueprint Mode (What is this?)
              </Typography>
              <RadioGroup defaultValue="I will Add Questions">
                <FormControlLabel
                  value="I will Add Questions"
                  control={<Radio />}
                  label="I will Add Questions"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
