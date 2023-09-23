import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../components/text-card";
import {
    Box, Divider
} from "@material-ui/core";

import {
    Breadcrumbs,
    Typography,
    Card,
    CardContent,
    Button,
    Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import RowWithIconAndText from "../components/row_witj_icon_and_text";
import { BookmarkBorderOutlined, EmailOutlined, MapOutlined, Navigation, PersonOutlined, Tag, TagFaces } from "@mui/icons-material";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
const useStyles = makeStyles({
    root: {
        backgroundColor: "#EDF3F7",
        minHeight: "100vh",
        padding: "30px",
    },

});


export default function ViewPaper() {
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