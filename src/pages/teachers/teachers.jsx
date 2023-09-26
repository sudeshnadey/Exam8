import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
    Box
} from "@material-ui/core";
import {
    Breadcrumbs,
    Typography,
    Card,
    Divider,
    Button,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    IconButton,
    Modal,
    FormControlLabel,
    Checkbox,
    TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { buttonStyle } from "../../styles/dashboard/dashboard_styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
const data = [
    { particulars: "Test Test (test@gmail.com)", qp: '0 / 5' },
];

const handleEdit = (id) => {
    // Handle edit action for the corresponding row
    console.log(`Edit button pressed for row ${id}`);
};

const handleDelete = (id) => {
    // Handle delete action for the corresponding row
    console.log(`Delete button pressed for row ${id}`);
};


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

export default function Teachers() {
    const [open, setOpen] = React.useState(false);
    const [checkedAgreedItems, setCheckedAgreedItems] = React.useState({});
    const [openTeacherRegistrationPage, setTeacherRegistrationPage] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleAgreedCheckBoxsChange = (event) => {
        setCheckedAgreedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [event.target.name]: event.target.checked,
        }));
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
                            <b>Teachers</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <div style={{ paddingLeft: "20px"  }}>
                <Button onClick={handleOpen} variant="contained" style={buttonStyle} >
                    Add Teacher
                </Button>
            </div>
            <Box height={20} />
            <Card style={{ marginLeft: "20px",  marginRight: "20px" }} elevation={0}>

                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color: "#001233",fontWeight:"bold",fontSize:"16px"}}>Particulars</TableCell>
                                <TableCell  sx={{color: "#001233",fontWeight:"bold",fontSize:"16px"}}>QP</TableCell>
                                <TableCell  sx={{color: "#001233",fontWeight:"bold",fontSize:"16px"}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.particulars}>
                                    <TableCell>{row.particulars}</TableCell>
                                    <TableCell>{row.qp}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleEdit(row.id)}>
                                            <EditIcon  sx={{color: "#001233"}}/>
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(row.id)}>
                                            <DeleteIcon   sx={{color:"#FF595A"}} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                    <h5 id="parent-modal-title">Add New Teacher</h5>
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
                        label="Enter Email ID Of Teacher"

                    />

                    <Box height={20} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />

                    <Box display="flex" justifyContent="flex-end">

                        <Button onClick={() => { setTeacherRegistrationPage(true) }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
                            Search
                        </Button>
                    </Box>


                    {openTeacherRegistrationPage === true ? <div>
                        <Box height={20} />
                        <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                        <Box height={20} />
                        <Typography variant="body" style={{ paddingTop: '10px' }}>
                            Register New Teacher
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
            <Footer/>
        </div>
    );
}