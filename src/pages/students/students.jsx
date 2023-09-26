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
    FormControlLabel,
    Checkbox,
    IconButton,
    Modal,
    TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { buttonStyle, outlineButtonStyle, blackOutlineButtonStyle } from "../../styles/dashboard/dashboard_styles";
import CustomCard from "../../components/shared/card";
import CloseIcon from '@mui/icons-material/Close';
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

export default function Student() {
    const [selectedValue, setSelectedValue] = useState('All Students');
    const [selectedClassValue, setSelectedClassValue] = useState('Class 01');
    const [selectedBatchValue, setSelectedbatchValue] = useState('Batch Option 1');
    const [checkedItems, setCheckedItems] = useState({});
    const [checkedAllItems, setCheckedAllItems] = useState({});
    const [checkedAgreedItems, setCheckedAgreedItems] = useState({});
    const [open, setOpen] = React.useState(false);
    const [openRegistrationPage, setRegistrationPage] = React.useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClassChange = (event) => {
        setSelectedClassValue(event.target.value);
    };

    const handleBatchChange = (event) => {
        setSelectedbatchValue(event.target.value);
    };

    const data = [
        {
            id: 1,
            name: 'Vaibhav Partap Singh',
            email: 'vaibhavpratapsingh202@gmail.com',
            batches: 'dfgdf',
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'johndoe@example.com',
            batches: 'xyz',
        },
        {
            id: 3,
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            batches: 'abc',
        },
        // Add more data objects as needed
    ];

    const handleCheckBoxsChange = (event) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [event.target.name]: event.target.checked,
        }));
    };

    const handleSelectAllCheckBoxsChange = (event) => {
        setCheckedAllItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [event.target.name]: event.target.checked,
        }));
    };

    const handleAgreedCheckBoxsChange = (event) => {
        setCheckedAgreedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [event.target.name]: event.target.checked,
        }));
    };

    const handleAssignBatch = (name) => {
        // Handle the assign batch action for the given name
        console.log(`Assign batch for ${name}`);
    };

    const handlePerformance = (name) => {
        // Handle the performance action for the given name
        console.log(`View performance for ${name}`);
    };

    const handleRemove = (name) => {
        // Handle the remove action for the given name
        console.log(`Remove ${name}`);
    };

    const handleDisable = (name) => {
        // Handle the disable action for the given name
        console.log(`Disable ${name}`);
    };


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
                            <b>Student</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <CustomCard cardTitle={"Students"}>
                <Grid container direction="column" style={{ margin: '10px' }}>
                    <Grid item>
                        <Typography variant="body" style={{ paddingTop: "10px" }}>
                            To upload students in bulk, call/WhatsApp us at +91-954543233.
                        </Typography>
                    </Grid>
                    <Box height={25} />
                    <Grid item>
                        <Button onClick={handleOpen} variant="contained" style={buttonStyle} >
                            Add Student
                        </Button>
                    </Grid>
                </Grid>
            </CustomCard>

            <Card style={{ margin: "20px" }} elevation={0}>
                <Grid container direction="column" style={{ margin: '20px' }}>
                    <Grid item>
                        <Typography variant="body" style={{ paddingTop: "10px" }}>
                            Search by batch:
                        </Typography>
                    </Grid>
                    <Box height={25} />
                    <Grid item>
                        <Select value={selectedValue} onChange={handleChange} sx={{ width: '200px', height: '40px' }}>
                            <MenuItem value="All Students">All Students</MenuItem>
                            <MenuItem value="Dummy Option 1">Dummy Option 1</MenuItem>
                            <MenuItem value="Dummy Option 2">Dummy Option 2</MenuItem>
                            <MenuItem value="Dummy Option 3">Dummy Option 3</MenuItem>
                            <MenuItem value="Dummy Option 4">Dummy Option 4</MenuItem>
                        </Select>

                    </Grid>
                    <Grid item sx={{ marginTop: "20px" }}>
                        <Button variant="contained" style={buttonStyle} >
                            Show
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Reset Filter
                        </Button>
                    </Grid>
                </Grid>

            </Card>

            <Card style={{ margin: "20px" }} elevation={0}>
                <Grid container direction="column" style={{ margin: '20px' }}>
                    <Grid item>
                        <Button variant="contained" style={buttonStyle} >
                            All Students
                        </Button>
                        <Button
                            variant="outlined"
                            style={blackOutlineButtonStyle}
                            className={classes.margin}
                        >
                            Batch No Assigned (0)
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Remove Student
                        </Button>
                    </Grid>
                    <Box height={20} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />
                    <Grid item>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedAllItems.selectall || false}
                                    onChange={handleSelectAllCheckBoxsChange}
                                    name="selectall"
                                />
                            }
                            label="Select All Students" />
                    </Grid>
                    <Box height={10} />
                    <Divider style={{ background: 'gray', margin: 20 }} variant="inset" />
                    <Box height={10} />

                    {data.map((item, index) => (
                        <Grid item sx={{ marginTop: "20px" }}>
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={checkedItems[`checkbox${index}`] || false}
                                        onChange={handleCheckBoxsChange}
                                        name={`checkbox${index}`}
                                    />
                                }
                                label={
                                    <div>
                                        <Typography variant="body" style={{ paddingTop: '10px' }}>
                                            {item.id}. {item.name}
                                        </Typography>
                                        <br />
                                        <Typography variant="body" style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                            Email: {item.email}
                                        </Typography>
                                        <br />
                                        <Typography variant="body" style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                            Batches: {item.batches}
                                        </Typography>
                                        <br />
                                        <Box height={20} />
                                        <Button variant="outlined" style={blackOutlineButtonStyle} className={classes.margin}>
                                            Assign batch
                                        </Button>
                                        <Button variant="outlined" style={blackOutlineButtonStyle} className={classes.margin}>
                                            Performance
                                        </Button>
                                        <Button variant="outlined" style={outlineButtonStyle} className={classes.margin}>
                                            Remove
                                        </Button>
                                        <Button variant="contained" style={buttonStyle}>
                                            Disable
                                        </Button>
                                    </div>
                                }
                            />
                            <Box height={20} />
                            <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                            <Box height={20} />
                        </Grid>
                    ))}

                </Grid>

            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                    <h5 id="parent-modal-title">Add Student To Batch</h5>
                    <IconButton onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>
                        <CloseIcon />
                    </IconButton>
                    <Box height={20} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />
                    <TextField
                        className={classes.textField}
                        variant="outlined"

                        sx={{
                            '& .MuiInputBase-root': {
                                height: '40px',
                                width: "530px", // Customize the height here
                            },
                            '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                            paddingTop: "10px",

                        }}
                        label="Enter Email ID Of Student"

                    />

                    <Box height={20} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />

                    <Box display="flex" justifyContent="flex-end">

                        <Button onClick={() => { setRegistrationPage(true) }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
                            Search
                        </Button>
                    </Box>


                    {openRegistrationPage === true ? <div>
                        <Box height={20} />
                        <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                        <Box height={20} />
                        <Typography variant="body" style={{ paddingTop: '10px' }}>
                            Register New Student
                        </Typography>


                        <Box height={20} />
                        <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                        <Box height={20} />

                        <TextField
                            className={classes.textField}
                            variant="outlined"

                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    width: "530px", // Customize the height here
                                },
                                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                                paddingTop: "10px",

                            }}
                            label="First Name"

                        />

                        <TextField
                            className={classes.textField}
                            variant="outlined"

                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    width: "530px", // Customize the height here
                                },
                                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                                paddingTop: "10px",

                            }}
                            label="Last Name"

                        />

                        <TextField
                            className={classes.textField}
                            variant="outlined"

                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    width: "530px", // Customize the height here
                                },
                                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                                paddingTop: "10px",

                            }}
                            label="Email"

                        />

                        <TextField
                            type="password"
                            className={classes.textField}
                            variant="outlined"

                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    width: "530px", // Customize the height here
                                },
                                '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                                paddingTop: "10px",

                            }}
                            label="Password"

                        />

                        <Select value={selectedClassValue} onChange={handleClassChange} sx={{ width: '100%', height: '40px', marginTop: "10px", }}>
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


                        <Select value={selectedBatchValue} onChange={handleBatchChange} sx={{ width: '100%', height: '40px', marginTop: "10px", }}>
                            <MenuItem value="Batch Option 1">Batch Option 1</MenuItem>
                            <MenuItem value="Batch Option 2">Batch Option 2</MenuItem>
                            <MenuItem value="Batch Option 3">Batch Option 3</MenuItem>
                            <MenuItem value="Batch Option 4">Batch Option 4</MenuItem>
                        </Select>
                        <Box height={20} />
                        <FormControlLabel

                            control={
                                <Checkbox
                                    checked={checkedAgreedItems.agreed || false}
                                    onChange={handleAgreedCheckBoxsChange}
                                    name="agreed"
                                />
                            }
                            label={
                                <Typography variant="body" style={{ paddingTop: '10px' }}>
                                    By creating an account, I accept Terms of Service, Privacy Policy and student is 13 years or above.
                                </Typography>
                            }

                        />
                        <Box height={20} />
                        <Box display="flex" justifyContent="flex-end">
                            <Button onClick={() => { }} variant="outlined" style={{ color: '#FF595A', marginRight: "10px", borderColor: '#FF595A' }}>
                                Cancel
                            </Button>

                            <Button onClick={() => { }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
                                Register
                            </Button>
                        </Box>


                    </div>
                        : <div></div>}
                </Box>
            </Modal>
            <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                <Pagination count={4} />
            </div>
            <Footer />
        </div>
    );
}

