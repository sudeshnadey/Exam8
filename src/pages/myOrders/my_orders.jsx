import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import {
    Box
} from "@material-ui/core";
import {
    Breadcrumbs,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import CustomCard from "../../components/shared/card";
import { buttonStyle } from "../../styles/dashboard/dashboard_styles";

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

function createData(
    subscriptionName,
    mini,
) {
    return {
        subscriptionName,
        mini,
    };
}

const rows = [
    createData('Order ID', '86924-1671548059'),
    createData('Subscription Name', "Mini"),
    createData('Order Date', "Dec 20, 2022"),
    createData('Validity', 'Valid From Dec 20, 2022 To Dec 20, 2023'),
    createData('Invoice', 'View Invoices'),
];

export default function MyOrders() {
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
                            <b>My Orders</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <CustomCard cardTitle={"Test Generator Subscriptions"}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" style={{ fontWeight: "bold" }}>
                                        {row.subscriptionName}
                                    </TableCell>

                                    <TableCell align="left">{row.mini}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </CustomCard>

            <Footer />
        </div>
    );
}