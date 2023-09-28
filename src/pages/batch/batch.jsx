import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import CustomCard from "../../components/shared/card";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box
} from "@material-ui/core";
import {
    Breadcrumbs,
    Typography,
    Button,
    Grid,
    Divider,
    Modal,
    IconButton,
    TextField
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { buttonStyle, blackOutlineButtonStyle } from "../../styles/dashboard/dashboard_styles";
import { styled } from '@mui/material/styles';
import InvitationModal from "../../components/dashboard/invitaion_modal";
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

const CopyButton = styled(Button)(({ theme }) => ({
    color: "#001233",
    borderColor: "#001233",
    "&:hover": {
        color: "#ff595a",
        backgroundColor: "#001233",
    },
}));
const data = [
    {
        id: 1,
        title: 'vv',
        createdBy: 'Ajay Vikas',
        batchCode: '2M62WDV',
        hasStudents: false,
    },
    {
        id: 2,
        title: 'Lorem Ipsum',
        createdBy: 'John Doe',
        batchCode: '8N39X5A',
        hasStudents: true,
    },
    {
        id: 3,
        title: 'Sample Title',
        createdBy: 'Jane Smith',
        batchCode: '4R76B2C',
        hasStudents: true,
    },
    // Add more data objects as needed
];
export default function Batch() {
    const [open, setOpen] = React.useState(false);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedBatch, setSelectedBatch] = React.useState(null);

    const openModal = (batch) => {
        setSelectedBatch(batch);
        console.log(batch);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
                            <b>Batches</b>
                        </Typography>
                    </Breadcrumbs>
                </div>
            </TextCard>
            <div style={{ margin: "20px" }}>
                <Button onClick={handleOpen} variant="contained" style={buttonStyle} >
                    Add Batch
                </Button>
            </div>
            <CustomCard cardTitle={"Bathces"}>
                {data.map((item) => (
                    <Grid key={item.id} container direction="column" style={{ margin: '20px' }}>
                        <Grid item>
                            <Typography variant="body" sx={{ marginLeft: '20px' }}>
                                {item.id}. {item.title}
                            </Typography>
                        </Grid>
                        <Box height={20} />
                        <div style={{ paddingLeft: '20px' }}>
                            <Grid item>
                                <Typography variant="body" sx={{ marginLeft: '20px' }}>
                                    Created by: {item.createdBy}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body" sx={{ marginLeft: '20px' }}>
                                    Batch Code: {item.batchCode}
                                </Typography>
                                <CopyButton variant="outlined" sx={{ marginLeft: '10px' }} endIcon={<FileCopyIcon />} onClick={() => { }}>
                                    Copy
                                </CopyButton>
                            </Grid>
                            <Grid item>
                                <Typography variant="body" sx={{ marginLeft: '20px' }}>
                                    {item.hasStudents ? 'Students: 10' : 'No student in this batch.'}
                                </Typography>
                            </Grid>
                            <Box height={20} />
                            <Grid item>
                                <Button onClick={() => { navigate(`/batches/${item.id}`); }} variant="outlined" style={blackOutlineButtonStyle} sx={{ marginLeft: '20px' }}>
                                    Manage
                                </Button>
                                <Button onClick={() => { openModal(item); }} variant="outlined" style={buttonStyle} sx={{ marginLeft: '10px' }}>
                                    Invite Students
                                </Button>
                            </Grid>
                        </div>
                        <Box height={20} />
                        <Divider style={{ background: 'gray', marginLeft: '20px', marginRight: '20px' }} variant="inset" />
                    </Grid>
                ))}
            </CustomCard>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                    <h5 id="parent-modal-title">Add/Edit Batch Name </h5>
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
                        label="Enter Batch Name"

                    />

                    <Box height={20} />
                    <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
                    <Box height={20} />
                    <Box display="flex" justifyContent="flex-end">
                        <Button onClick={() => { }} variant="outlined" style={{ color: '#FF595A', marginRight: "10px", borderColor: '#FF595A' }}>
                            Cancel
                        </Button>

                        <Button onClick={() => { }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
                            Save
                        </Button>
                    </Box>

                </Box>
            </Modal>
            {selectedBatch && (
                <InvitationModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    batchName={selectedBatch.batchName}
                    batchCode={selectedBatch.batchCode}
                    link={selectedBatch.link}
                />
            )}
            <Footer />
        </div>
    );
}

