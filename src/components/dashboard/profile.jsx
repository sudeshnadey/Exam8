import React from 'react';
import { Modal, Box, Divider, Button, IconButton, TextField, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { outlineButtonStyle, blackOutlineButtonStyle, } from "../../styles/dashboard/dashboard_styles";
import { makeStyles } from "@material-ui/core/styles";
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
function Profile({ isOpen, closeModal }) {
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
    const [checkedAgreedItems, setCheckedAgreedItems] = React.useState({});

    const handleAgreedCheckBoxsChange = (event) => {
        setCheckedAgreedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [event.target.name]: event.target.checked,
        }));
    };
    const classes = useStyles();
    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"

        >
            <Box sx={{ ...style, width: 600 }}>
                <h5 id="parent-modal-title">Profile</h5>
                <IconButton onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10 }}>
                    <CloseIcon />
                </IconButton>
                <Box height={20} />
                <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                <Box height={20} />
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
                    value="Ajay"

                />
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
                    label="Last Name"
                    value="Vikas"

                />
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
                    label="Email"
                    value="ajaymishraskp79@gmail.com"

                />
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
                    label="Phone Number"
                    value="+917054239225"

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
                            I would like to receive updates via  WhatsApp, SMS & email.
                        </Typography>
                    }

                />

                <Box height={20} />
                <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                <Box height={20} />

                <Box display="flex" justifyContent="flex-end">
                    <Button onClick={closeModal} variant="outlined" style={outlineButtonStyle}>
                        Delete Account
                    </Button>
                    <Button onClick={() => { }} variant="outlined" style={blackOutlineButtonStyle}>
                        Save
                    </Button>

                </Box>
            </Box>
        </Modal >
    );
}

export default Profile;
