import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
    Box, Divider
} from "@material-ui/core";
import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Breadcrumbs,
    Typography,
    Card,
    CardContent,
    Button,
    Pagination,
    Select,
    MenuItem,
    TextField,
    IconButton,
    InputAdornment,
    Modal,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import RowWithIconAndText from "../../components/dashboard/row_witj_icon_and_text";
import { BookmarkBorderOutlined, PersonOutlined } from "@mui/icons-material";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
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

const buttonStyle = {
    backgroundColor: "#001233",
    color: "white",
    marginRight: "10px",
    paddingTop: "5px",
    marginBottom: "5px",
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
const data = [
    {
        id: 1,
        title: 'Test New',
        questionPaperId: '978275',
        subject: 'CBSE > Class 11 > Physics',
        category: 'Worksheet',
        createdBy: 'Ajay Vikas (Sep 21, 2023, 1:42:51 AM)',
        status: 'Testpaper in progress. PDF generation not started.',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Test Old',
        questionPaperId: '123456',
        subject: 'CBSE > Class 10 > Mathematics',
        category: 'Exam',
        createdBy: 'John Doe (Sep 20, 2023, 11:30:15 AM)',
        status: 'Testpaper completed. PDF generation in progress.',
        isCompleted: true,
    },
    {
        id: 3,
        title: 'Quiz Time',
        questionPaperId: '789012',
        subject: 'CBSE > Class 12 > Chemistry',
        category: 'Quiz',
        createdBy: 'Jane Smith (Sep 22, 2023, 3:20:45 PM)',
        status: 'Quiz in progress. Results pending.',
        isCompleted: false,
    },
    {
        id: 4,
        title: 'Test Old',
        questionPaperId: '123456',
        subject: 'CBSE > Class 10 > Mathematics',
        category: 'Exam',
        createdBy: 'John Doe (Sep 20, 2023, 11:30:15 AM)',
        status: 'Testpaper completed. PDF generation in progress.',
        isCompleted: false,
    },
    {
        id: 5,
        title: 'Quiz Time',
        questionPaperId: '789012',
        subject: 'CBSE > Class 12 > Chemistry',
        category: 'Quiz',
        createdBy: 'Jane Smith (Sep 22, 2023, 3:20:45 PM)',
        status: 'Quiz in progress. Results pending.',
        isCompleted: true,
    },
];

const outlineButtonStyle = {
    border: "1px solid #001233",
    color: "#001233",
    marginRight: "10px",
    paddingTop: "5px",
    marginBottom: "5px",
};

export default function ViewPaper() {
    const [selectedValue, setSelectedValue] = useState('All');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ padding: "20px" }}>
            <Box height={80} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                    <h5 id="parent-modal-title">Search  Paper By Category</h5>
                    <IconButton onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Box height={30} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <div>
                        <Box height={30} />
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            CBSE
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Enterance Exam
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Jharkhand Board
                        </Button>
                    </div>
                    <Box height={30} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />
                    <Button onClick={()=>{}} variant="outlined" style={{ color: '#FF595A',marginRight:"10px",borderColor:'#FF595A'}}>
                        Clear All
                    </Button>
                  
                    <Button onClick={()=>{}} variant="outlined"  style={{ color: '#001233',borderColor:'#001233'}}>
                        Apply
                    </Button>

                </Box>
            </Modal>

            <TextCard>
                <div>
                    <Breadcrumbs separator="/" aria-label="breadcrumb">
                        <Link style={{ textDecoration: "none",color:"#FF595A" }} to="/">
                            <b>Home</b>
                        </Link>
                        <Typography color="textPrimary">
                            <b>User Test Papers</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <Typography variant="h5" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                My Question Papers
            </Typography>

            <Card style={{ margin: "20px" }} elevation={0}>
                <Button onClick={handleOpen} variant="outlined" startIcon={<FilterListIcon style={{ color: '#888' }} />} style={{ margin: "20px", color: '#888', borderColor: '#888', }}>
                    Filter
                </Button>
                <Select value={selectedValue} onChange={handleChange} sx={{ width: '200px', height: '40px' }}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Test Type">Test Type</MenuItem>
                    <MenuItem value="Question Paper">Question Paper</MenuItem>
                    <MenuItem value="Online Test">Online Test</MenuItem>
                    <MenuItem value="Work Sheet">Work Sheet</MenuItem>
                </Select>


                <TextField
                    className={classes.textField}
                    label="Search By Name"
                    variant="outlined"
                    sx={{
                        '& .MuiInputBase-root': {
                            height: '40px', // Customize the height here
                        },
                        '& .MuiInputAdornment-positionEnd': { marginRight: 0, paddingRight: 0 },
                        paddingTop: "17px",
                        paddingLeft: "20px",

                    }}
                    InputLabelProps={{
                        sx: { paddingLeft: '12px', paddingTop: '10px' }, // Adjust the padding here
                    }}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" style={{ margin: 0 }}>
                                <IconButton
                                    onClick={() => { }}
                                    style={{ backgroundColor: "#001233", borderRadius: '3px', width: "50px", }}
                                >
                                    <SearchIcon style={{ color: 'white' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />


            </Card>
            <div style={{ margin: "20px" }}>
                <Button variant="contained" style={buttonStyle} >
                    Create Test Paper
                </Button>
            </div>
            {data.map((item) => (
                <Card key={item.id} style={{ margin: '20px' }} elevation={0}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6" style={{ paddingLeft: '10px' }}>
                            {item.id} . {item.title}
                        </Typography>
                        <Divider style={{ background: 'black' }} variant="middle" />
                        <RowWithIconAndText icon={<NearMeOutlinedIcon />} text={`Question Paper ID: ${item.questionPaperId}`} />
                        <RowWithIconAndText icon={<LocalOfferOutlinedIcon />} text={item.subject} />
                        <RowWithIconAndText icon={<BookmarkBorderOutlined />} text={item.category} />
                        <RowWithIconAndText icon={<PersonOutlined />} text={`Created By: ${item.createdBy}`} />
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                            <Typography variant="body2" color="#001233">
                                {item.status}
                            </Typography>
                            <Box width={10} />
                            {!item.isCompleted ? <Button variant="outlined" style={{color: '#001233',borderColor:'#001233'}} startIcon={<SmartDisplayIcon />}>
                                Resume
                            </Button>
                                : <Button variant="outlined" sx={{ color: "#FF595A", borderColor: "#FF595A" }} startIcon={<MenuIcon />}>
                                    Actions
                                </Button>}
                        </div>
                    </CardContent>
                </Card>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination count={4} />
            </div>
            <Footer />
        </div>
    );
}