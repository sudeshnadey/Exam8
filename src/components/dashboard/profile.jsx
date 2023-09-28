import React from 'react';
import { Modal, Box, Divider, Button, IconButton, Grid } from "@mui/material";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@mui/icons-material/Close';

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
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"

    >
      <Box sx={{ ...style, width: 600 }}>
        <h5 id="parent-modal-title">Invite Students</h5>
        <IconButton onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Box height={20} />
        <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
        <Box height={20} />


        <Box height={20} />
        <Divider style={{ background: 'gray', margin: 0 }} variant="inset" />
        <Box height={20} />

        <Box display="flex" justifyContent="flex-end">

          <Button onClick={() => { }} variant="outlined" style={{ color: '#001233', borderColor: '#001233' }}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal >
  );
}

export default Profile;
