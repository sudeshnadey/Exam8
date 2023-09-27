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
    Button
} from "@mui/material";
import Footer from "../../components/shared/footer";
import CustomCard from "../../components/shared/card";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { styled } from '@mui/material/styles';

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


const RowContainer = styled(Grid)(({ theme }) => ({
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

const Link = styled(Typography)({
    textDecoration: 'none',
});


const CopyButton = styled(Button)(({ theme }) => ({
    color: "#001233",
    borderColor: "#001233",
    "&:hover": {
        color: "#ff595a",
        backgroundColor: "#001233",
    },
}));


export default function ReferAndEarn() {
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
                            <b>Refer & Earn</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <CustomCard cardTitle={"Our Referral Program"}>

                <RowContainer container>
                    <Grid item>
                        <Typography variant="body1" style={{ marginLeft: '8px', marginRight: '8px' }}>
                            Referral Code :
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginRight: '8px' }}>
                        <Typography variant="body1">
                            CRQH3J
                        </Typography>
                    </Grid>
                    <Grid item >
                        <CopyButton variant="outlined" endIcon={<FileCopyIcon />} onClick={() => { }}>
                            Copy
                        </CopyButton>
                    </Grid>
                </RowContainer>
                <Grid style={{ marginLeft: '8px', marginRight: '8px' }}>
                    <Typography>
                        Share the referral code above. You will Earn 10% Papers in your Test Generator subscription and buyers will get 10% OFF while using your code.
                    </Typography>

                    <Typography style={{ marginTop: '20px',marginLeft: '12px' }}>
                        <b>1. Test Generator: </b> Whenever any test generator is purchased using your coupon code, you will get 10% of question papers into your account. This means, if someone purchases 100 Question Papers using your coupon code, we will credit 10 papers into your account that will be valid till your current package's expiry date.
                    </Typography>
                    <Typography style={{ marginTop: '20px',marginLeft: '12px' }}>
                        <b>2. Student Subscription: </b>If your students purchase any subscription in the myCBSEguide App or website using your coupon code, you will get One Paper against each subject purchased. This means if 100 students use your code to buy 3 subjects each, we will credit 300 papers into your account that will be valid till your current package's expiry date.
                    </Typography>
                </Grid>
            </CustomCard>

            <Footer />
        </div>
    );
}