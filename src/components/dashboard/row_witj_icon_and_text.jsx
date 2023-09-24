import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from '@mui/material';
import { Icon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const RowWithIconAndText = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.rowContainer}>
      <IconButton className={classes.icon}>
        {icon}
      </IconButton>
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default RowWithIconAndText;