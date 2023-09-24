import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
  Button, Box, Card, Divider,
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
  Modal,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomStepper from "../../components/createPaper/stepper";
import Footer from "../../components/shared/footer";
import CloseIcon from '@mui/icons-material/Close';
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

    '& p': {
      color: "#FF595A",
    }
  },

});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #FFF',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function CreatePaper() {
  const [open, setOpen] = React.useState(false);
  const [selectedExam, setSelectedExam] = React.useState('CBSE');
  const [selectedClass, setSelectedClass] = React.useState('Class 01');
  const [selectedCourse, setSelectedCourse] = React.useState('Others');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
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
            <Link style={{ textDecoration: "none", color: "#FF595A" }} to="/view-papers">
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
          style={{
            marginLeft: "20px",
          }}
          className={classes.textField}
          label="Search By Name"
          variant="outlined"
          sx={{
            '& .MuiInputBase-root': {
              height: '40px',
              width: "500px", // Customize the height here
            },
            '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
            paddingTop: "10px",

          }}
          InputLabelProps={{
            sx: { paddingLeft: '4px', paddingTop: '1px' }, // Adjust the padding here
          }}
          helperText="Please select class & subject using select button above."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ margin: 0 }}>
                <Button
                  onClick={handleOpen}
                  style={{ backgroundColor: "#001233", borderRadius: '3px', width: "50px", }}
                >
                  <Typography style={{ color: 'white' }}> Edit</Typography>
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

        <Divider style={{ background: 'gray', marginLeft: 20, marginRight: 20 }} variant="inset" />
        <Box height={20} />
        <Grid container direction="column">
          <Grid item>
            <TextField
              className={classes.textField}
              variant="outlined"
              style={{ marginLeft: "20px" }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  width: "500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                paddingTop: "10px",

              }}
              label="Test Paper Name"
              helperText={'Please enter testpaper name'}
            />

          </Grid>
          <Grid item>

            <TextField
              className={classes.textField}
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  width: "500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
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

                  width: "500px", // Customize the height here
                },
                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },


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
          <Grid item style={{ margin: "20px" }}>

            <Typography style={{ color: "#FF595A" }}>- Please select class & subject.</Typography>

            <Typography style={{ color: "#FF595A" }}>- Please enter testpaper name.</Typography>

            <Typography style={{ color: "#FF595A" }}>- Please enter valid time</Typography>

          </Grid>
          <Grid item style={{ margin: "20px" }}>
            <Button variant="contained" style={{ backgroundColor: "#001233", color: "white" }}>
              Save & Continue
            </Button>
            <Box height={30} />
          </Grid>
        </Grid>

      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h5 id="parent-modal-title">Class & Subject</h5>
          <IconButton onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
          <Box height={30} />
          <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
          <div>
            <Box height={30} />
            <Select value={selectedExam} onChange={handleExamChange} sx={{ width: '100%', height: '40px' }}>
              <MenuItem value="CBSE">CBSE</MenuItem>
              <MenuItem value="Entrance Exam">Entrance Exam</MenuItem>
              <MenuItem value="Compititive Exams">Compititive Exams</MenuItem>
              <MenuItem value="ICSE & ISC">ICSE & ISC</MenuItem>
              <MenuItem value="Teacher Exams">Teacher Exams</MenuItem>
            </Select>
            <Box height={20} />
            <Select value={selectedClass} onChange={handleClassChange} sx={{ width: '100%', height: '40px' }}>
              <MenuItem value="Class 01">Class 01</MenuItem>
              <MenuItem value="Class 02">Class 02</MenuItem>
              <MenuItem value="Class 03">Class 03</MenuItem>
              <MenuItem value="Class 04">Class 04</MenuItem>
              <MenuItem value="Class 05">Class 05</MenuItem>
              <MenuItem value="Class 06">Class 06</MenuItem>
              <MenuItem value="Class 07">Class 07</MenuItem>
              <MenuItem value="Class 08">Class 08</MenuItem>
              <MenuItem value="Class 09">Class 09</MenuItem>
              <MenuItem value="Class 10">Class 10</MenuItem>
              <MenuItem value="Class 11">Class 11</MenuItem>
              <MenuItem value="Class 12">Class 12</MenuItem>
            </Select>
            <Box height={20} />
            <Select value={selectedCourse} onChange={handleCourseChange} sx={{ width: '100%', height: '40px' }}>
              <MenuItem value="Others">Others</MenuItem>
              <MenuItem value="Teki Computer Science">Teki Computer Science</MenuItem>
              
            </Select>
          </div>
          <Box height={30} />
          <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
          <Box height={20} />
          <Grid container justifyContent="flex-end">
            <Button onClick={() => { }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
              OK
            </Button>
          </Grid>

        </Box>
      </Modal>

      <Footer />
    </div>
  );
}
