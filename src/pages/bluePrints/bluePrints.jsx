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
import FilterListIcon from '@mui/icons-material/FilterList';

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

export default function BluePrints() {
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
                            <b>Blueprints</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <Typography variant="h5" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                Blueprints
            </Typography>
            <Card style={{ margin: "20px" }} elevation={0}>
                <Grid container direction="column" style={{ margin: '20px' }}>
                    <Grid item>
                        <Typography variant="body" >
                            Search blueprints by category
                        </Typography>
                    </Grid>
                    <Box height={20} />
                    <Grid item>
                        <Button onClick={() => { }} variant="outlined" startIcon={<FilterListIcon style={{ color: '#888' }} />} style={{ color: '#888', borderColor: '#888', }}>
                            Filter
                        </Button>
                    </Grid>
                </Grid>
                <Divider style={{ background: 'gray', marginLeft: "20px", marginRight: "20px" }} variant="inset" />
                <Box height={20} />

                <Button
                    sx={{ marginLeft: "20px" }}
                    variant="outlined"
                    style={outlineButtonStyle}
                    className={classes.margin}
                >
                    Reset
                </Button>
                <Box height={30} />
            </Card>

            <Card style={{ margin: "20px" }} elevation={0}>
                <Box height={40} />
                <Typography variant="body"   sx={{ marginLeft: "20px" }}>

                    No custom blueprints!
                </Typography>

                <Box height={40} />
            </Card>
            <Footer />
        </div>
    );
}