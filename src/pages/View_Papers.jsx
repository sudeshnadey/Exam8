import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../components/text-card";
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
    InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import RowWithIconAndText from "../components/row_witj_icon_and_text";
import { BookmarkBorderOutlined, PersonOutlined } from "@mui/icons-material";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
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



export default function ViewPaper() {
    const [selectedValue, setSelectedValue] = useState('All');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ padding: "20px" }}>
            <Box height={80} />
            <TextCard>
                <div>
                    <Breadcrumbs separator="/" aria-label="breadcrumb">
                        <Link style={{ textDecoration: "none" }} to="/">
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
                <Button variant="outlined" startIcon={<FilterListIcon style={{ color: '#888' }} />} style={{ margin: "20px", color: '#888', borderColor: '#888', }}>
                    Filter
                </Button>
                <Select value={selectedValue} onChange={handleChange} sx={{ width: '200px', height: '40px' }}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Option1">Option 1</MenuItem>
                    <MenuItem value="Option2">Option 2</MenuItem>
                    <MenuItem value="Option3">Option 3</MenuItem>
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
            <Card style={{ margin: "20px" }} elevation={0}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6" style={{ paddingLeft: "10px" }}>
                        1. Test New
                    </Typography>
                    <Divider style={{ background: 'black' }} variant="middle" />
                    <RowWithIconAndText icon={<NearMeOutlinedIcon />} text={"Question Paper ID: 978275"} />
                    <RowWithIconAndText icon={<LocalOfferOutlinedIcon />} text={"CBSE > Class 11 > Physics"} />
                    <RowWithIconAndText icon={<BookmarkBorderOutlined />} text={" Worksheet"} />
                    <RowWithIconAndText icon={<PersonOutlined />} text={"Created By: Ajay Vikas (Sep 21, 2023, 1:42:51 AM)"} />
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: "10px" }}>
                        <Typography variant="body2" color="#001233">Testpaper in progress. PDF generation not started.</Typography>
                        <Box width={10} />
                        <Button variant="outlined" color="primary">
                            Resume
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination count={4} />
            </div>
            <Footer />
        </div>
    );
}