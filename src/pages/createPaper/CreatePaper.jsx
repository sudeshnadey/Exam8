import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
  Button, Box, Card, Divider, List,
  ListItem
} from "@material-ui/core";

import {
  Breadcrumbs,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Checkbox,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomStepper from "../stepper";
import Footer from "../../components/shared/footer";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#EDF3F7",
    minHeight: "100vh",
  },
  textField: {
    '& .MuiInputBase-root': {
        padding: 0, // Remove padding
        margin: 0, // Remove margin
    },
},

});


export default function CreatePaper() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ padding: "20px" }}>
      <Box height={80} />
      <TextCard>
        <div>
          <Breadcrumbs separator="/" aria-label="breadcrumb">
            <Link style={{ textDecoration: "none", color: "#FF595A" }} to="/">
              <b>Home</b>
            </Link>
            <Link style={{ textDecoration: "none", color: "#FF595A" }} to="/questions">
              <b>Questions Paper</b>
            </Link>
            <Typography color="textPrimary">
              <b>Generate Test paper</b>
            </Typography>
          </Breadcrumbs>
        </div>
      </TextCard>
      <Card style={{ margin: "20px" }} elevation={0}>
        <CustomStepper />
      </Card>
      <Card style={{ margin: "20px" }} elevation={0}>
        <Typography style={{ paddingLeft: "20px", paddingTop: "20px", color: "#6C7781" }}>
          Class & Subject
        </Typography>
        <TextField
              style={{ marginLeft: "20px",
            }}
              className={classes.textField}
              label="Search By Name"
              variant="outlined"
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  width:"500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0},
                paddingTop: "10px",
               
              }}
              InputLabelProps={{
                sx: { paddingLeft: '4px', paddingTop: '1px' }, // Adjust the padding here
              }}

              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{ margin: 0 }}>
                    <Button
                      onClick={() => { }}
                      style={{ backgroundColor: "#001233", borderRadius: '3px', width: "50px", }}
                    >
                      <Typography style={{color:'white'}}> Edit</Typography> 
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
             <Box height={30} />
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
      <Card style={{ margin: "20px" }} elevation={0}>
        <Typography style={{ padding: "20px" }}>PDF Header & Footer (View/Edit)</Typography>
        <FormControl component="fieldset" style={{ padding: "20px" }}>
          <Typography variant="subtitle1" gutterBottom>
            New dps public school
          </Typography>
          <RadioGroup defaultValue="New dps public school">
            <FormControlLabel
              value="New dps public school"
              control={<Radio />}
              label="New dps public school"

            />
          </RadioGroup>
        </FormControl>

        <Divider style={{ background: 'gray', marginLeft: 20,marginRight: 20 }} variant="inset" />
        <Box height={20} />
        <Grid container direction="column">
          <Grid item>
            <TextField
              variant="outlined"
              style={{ marginLeft: "20px" }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  width:"500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0},
                paddingTop: "10px",
               
              }}
              label="Test Paper Name"
              helperText={'Please enter testpaper name'}
            />

          </Grid>
          <Grid item>

            <TextField
               sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  width:"500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0},
                paddingTop: "10px",
               
              }}
              variant="outlined"
              type="number"
              style={{ marginLeft: "20px" }}
              label="Time Allowed (minutes)"
              helperText={'Please enter time'}
            />
          </Grid>

          <Grid item style={{ marginLeft: "20px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Add Watermark in PDF"
            />
          </Grid>

        </Grid>
        <Box height={30} />
      </Card>
      <Card style={{ margin: "20px" }} elevation={0}>
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel
              style={{ margin: "10px" }}
              control={<Checkbox />}
              label="Show marks along side each question"
            />
          </Grid>
          <Grid item style={{ margin: "20px" }}>
            <TextField
                sx={{
                  '& .MuiInputBase-root': {
                   
                    width:"500px", // Customize the height here
                  },
                  '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0},
            
                 
                }}
              variant="outlined"
              label="General Instructions"
              multiline
              rows={8}

            />
          </Grid>
          <Grid item>
            <FormControlLabel
              style={{ margin: "10px" }}
              control={<Checkbox />}
              label="I have read and agree to the Terms of Use of this test generator."
            />
          </Grid>
          <Grid item>
            <List>
              <ListItem>
                <Typography style={{ color: "red" }}>- Please select class & subject.</Typography>
              </ListItem>
              <ListItem>
                <Typography style={{ color: "red" }}>- Please enter testpaper name.</Typography>
              </ListItem>
              <ListItem>
                <Typography style={{ color: "red" }}>- Please enter valid time</Typography>
              </ListItem>

            </List>
          </Grid>
          <Grid item style={{ margin: "20px"}}>
            <Button variant="contained"  style={{ backgroundColor: "#001233",color:"white" }}>
              Save & Continue
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </div>
  );
}
