import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div style={{ margin: "20px" }}>
      <div className={classes.container}>
        <Typography variant="body2" align="center">
          Copyright © Examin8 2023
        </Typography>
        <Typography variant="body2" align="end">
          Privacy Policy · Terms &amp; Conditions
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
