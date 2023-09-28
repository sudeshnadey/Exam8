import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
    Box
} from "@material-ui/core";
import {
    Breadcrumbs,
    Typography,
    Grid,
    Button,

} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { outlineButtonStyle, blackOutlineButtonStyle } from "../../styles/dashboard/dashboard_styles";
import { useParams } from 'react-router-dom';
import CustomCard from "../../components/shared/card";
import MenuCard from "../../components/shared/menu_card";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useNavigate } from 'react-router-dom';

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

const batchData = [
    { batchName: "Batch one", id: 1, },
    { batchName: "Batch two", id: 2 },
    { batchName: "Batch three", id: 3 },
];

const data = [
    { label: "Students", value: 0 },
    { label: "Teachers", value: 0 },
    { label: "Videos", value: 0 },
    { label: "Links", value: 0 },
];


export default function BatchDetailPage() {
    const navigate = useNavigate();
   

    const { id } = useParams();
    const batch = batchData.find((batch) => batch.id === parseInt(id));


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
                            <b>{batch.batchName}</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <Typography variant="h5" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                Blueprints
            </Typography>
            <CustomCard cardTitle={"Members"}>
                <Grid container direction="row">

                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <LocalLibraryOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"Students (1)"}
                            handleCardClick={() => {
                                navigate('/students');
                            }}
                        />
                    </Grid>
                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <CastForEducationOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"Teachers"}
                            handleCardClick={() => {
                                navigate('/teachers');
                            }}
                        />
                    </Grid>
                </Grid>
            </CustomCard>

            <CustomCard cardTitle={"Student Performance"}>
                <Grid container direction="row">

                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <DescriptionOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"Overall"}
                        />
                    </Grid>

                </Grid>
            </CustomCard>

            <CustomCard cardTitle={"Resources"}>
                <Grid container direction="row">

                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <SmartDisplayOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"Videos"}
                        />
                    </Grid>
                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <DescriptionOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"Study Material"}
                        />
                    </Grid>

                    <Grid item style={{ marginRight: "40px" }}>
                        <MenuCard
                            icon={
                                <ArticleOutlinedIcon
                                    style={{ color: "#001233" }}
                                    sx={{ fontSize: 100 }}
                                />
                            }
                            text={"View Papers"}
                        />
                    </Grid>
                </Grid>
            </CustomCard>

            <CustomCard cardTitle={"Summary"}>
                <Grid container direction="Column">
                    {data.map((item, index) => (
                        <Typography key={index}>
                            {item.label}: {item.value}
                        </Typography>
                    ))}
                    <Grid item sx={{ marginTop: "20px" }}>
                        <Button variant="outlined" style={blackOutlineButtonStyle} >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            style={outlineButtonStyle}
                            className={classes.margin}
                        >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </CustomCard>

         
            <Footer />
        </div>
    );
}