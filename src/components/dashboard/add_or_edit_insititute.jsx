import React from 'react';
import { Modal, Box, Divider, Button, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core/styles";
import { outlineButtonStyle, blackOutlineButtonStyle } from "../../styles/dashboard/dashboard_styles";

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
function AddInstitution({ isOpen, closeModal }) {
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
    const classes = useStyles();
    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"

        >
            <Box sx={{ ...style, width: 600 }}>
                <h5 id="parent-modal-title">Add/Edit Institution</h5>
                <IconButton onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10 }}>
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
                    label="Institute Name:"
                    value={"New dps public school"}



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
                    label="Address:"
                    value={"Allahabad"}



                />
                <Box height={20} />
                <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                <Box height={20} />

                <Box display="flex" justifyContent="flex-end">
                    <Button onClick={closeModal} variant="outlined" style={outlineButtonStyle}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }} variant="outlined" style={blackOutlineButtonStyle}>
                        Save
                    </Button>

                </Box>
            </Box>
        </Modal >
    );
}

export default AddInstitution;
