import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
    Box
} from "@material-ui/core";
import {
    Breadcrumbs,
    Typography,
    Pagination,
    Card,
    Select,
    MenuItem,
    Divider,
    Button,
    Grid,
    InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { buttonStyle, outlineButtonStyle } from "../../styles/dashboard/dashboard_styles";


const useStyles = makeStyles({
    root: {
        backgroundColor: "#EDF3F7",
        minHeight: "100vh",
        padding: "30px",
    },
    textField: {
        '& .MuiInputBase-root': {
            padding: 0, // Remove padding
            margin: 0, // Remove margin
        },
    },

});
const data = [
    {
        id: 1,
        title: 'Hello',
        options: ['FSFS', 'HellW', 'DFDSW', 'QWASDX'],
        questionType: 'Multiple Choice Question',
        weightage: 'VSA (Very Short Answer)',
    },
    {
        id: 2,
        title: 'Greetings',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        questionType: 'True or False Question',
        weightage: 'SA (Short Answer)',
    },
    {
        id: 3,
        title: 'Bonjour',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        questionType: 'Matching Question',
        weightage: 'LA (Long Answer)',
    },

];


export default function MyQuestions() {
    const [selectedModuleValue, setSelectedModuleValue] = useState('Select Module');
    const [selectedCourseValue, setSelectedCourseValue] = useState('Select Course');
    const [selectedSubjectValue, setSelectedSubjectValue] = useState('Select Subject');
    const [selectedChapterValue, setSelectedChapterValue] = useState('Select Chapter');
    const [selectedTopicValue, setSelectedTopicValue] = useState('Select Topic');

    const handleModuleChange = (event) => {
        setSelectedModuleValue(event.target.value);
    };

    const handleCourseChange = (event) => {
        setSelectedCourseValue(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSelectedSubjectValue(event.target.value);
    };

    const handleChapterChange = (event) => {
        setSelectedChapterValue(event.target.value);
    };
    const handleTopicChange = (event) => {
        setSelectedTopicValue(event.target.value);
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
                        <Typography color="textPrimary">
                            <b>Questions</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>

            <Card style={{ margin: "20px" }} elevation={0}>
                <Box height={20} />
                <Select value={selectedModuleValue} style={{ margin: "20px" }} onChange={handleModuleChange} sx={{ width: '200px', height: '40px' }} placeholder="Select an option…">
                    <MenuItem value="Select Module">Select Module</MenuItem>
                    <MenuItem value="CBSE">CBSE</MenuItem>
                    <MenuItem value="Entrance Exam">Entrance Exam</MenuItem>
                    <MenuItem value="Compititive Exams">Compititive Exams</MenuItem>
                    <MenuItem value="ICSE & ISC">ICSE & ISC</MenuItem>
                    <MenuItem value="Teacher Exams">Teacher Exams</MenuItem>
                </Select>
                <Select style={{ marginRight: "20px" }} value={selectedCourseValue} onChange={handleCourseChange} sx={{ width: '200px', height: '40px' }}>
                    <MenuItem value="Select Course">Select Course</MenuItem>
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

                <Select style={{ marginRight: "20px" }} value={selectedSubjectValue} onChange={handleSubjectChange} sx={{ width: '200px', height: '40px' }}>

                    <MenuItem value="Select Subject">Select Subject</MenuItem>
                    <MenuItem value="Chemisty">Chemisty</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    
                </Select>

                <Select style={{ marginRight: "20px" }} value={selectedChapterValue} onChange={handleChapterChange} sx={{ width: '200px', height: '40px' }}>
                    <MenuItem value="Select Chapter">Select Chapter</MenuItem>
                    <MenuItem value="Acid And Base">Acid And Base</MenuItem>
                    <MenuItem value="Oxidation">Oxidation</MenuItem>
                    <MenuItem value="Acid And Base">Acid And Base</MenuItem>
                    <MenuItem value="Oxidation">Oxidation</MenuItem>
                </Select>

                <Select style={{ marginRight: "20px" }} value={selectedTopicValue} onChange={handleTopicChange} sx={{ width: '200px', height: '40px' }}>
                    <MenuItem value="Select Topic">Select Topic</MenuItem>
                    <MenuItem value="Solublity">Solublity</MenuItem>
                    <MenuItem value="Reaction">Reaction</MenuItem>
                    <MenuItem value="PH level">PH level</MenuItem>
                    
                </Select>
                <Divider style={{ background: 'gray', marginLeft: "20px", marginRight: "20px" }} variant="inset" />
                <Box height={20} />
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Button variant="contained" style={buttonStyle} sx={{ marginLeft: "20px" }}>
                            Filter
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Reset
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={buttonStyle} sx={{ marginLeft: "20px" }}>
                            Upload CSV
                        </Button>
                    </Grid>
                </Grid>

                <Box height={20} />

            </Card>
            <Box height={10} />
            <div style={{ margin: "20px" }}>
                <Button variant="contained" style={buttonStyle} >
                    Create New Question
                </Button>
            </div>
            <Typography variant="h6" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                Total Questions: {data.length}
            </Typography>


            {data.map((item) => (
                <Card key={item.id} style={{ margin: '20px' }} elevation={0}>
                    <Grid container direction="column" style={{ margin: '20px' }}>
                        <Grid item>
                            <Typography variant="body3" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                                {item.id}. {item.title}
                            </Typography>
                        </Grid>
                        <div style={{ margin: '20px' }}>
                            {item.options.map((option, index) => (
                                <Grid item key={index}>
                                    <Typography variant="body3" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                                        {String.fromCharCode(65 + index)}. {option}
                                    </Typography>
                                </Grid>
                            ))}
                        </div>
                        <Grid item>
                            <Typography variant="body3" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                                [Question Type: {item.questionType}, Weightage: {item.weightage}]
                            </Typography>
                        </Grid>
                        <Box height={30} />
                        <Grid item>
                            <Button variant="contained" style={buttonStyle} sx={{ marginLeft: '20px' }}>
                                Edit
                            </Button>
                            <Button variant="outlined" style={outlineButtonStyle}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                <Pagination count={4} />
            </div>
            <Footer />
        </div>
    );
}