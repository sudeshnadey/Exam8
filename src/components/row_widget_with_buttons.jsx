import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { styled } from "@mui/material/styles";

const RowContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const ManageButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const InviteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.success.main,
  borderColor: theme.palette.success.main,
  "&:hover": {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
  },
}));

function RowWidget({batchName}) {
  return (
    <RowContainer container>
      <Grid item>
        <SchoolOutlinedIcon
          style={{ color: "#1ABC9C" }}
          sx={{ fontSize: 40 }}
        />
      </Grid>
      <Grid item>
        <Typography variant="body1" style={{ marginLeft: "8px" }}>
        {batchName}
        </Typography>
      </Grid>
      <Grid item sx={{ marginLeft: "auto" }}>
        <ManageButton variant="outlined" style={{ marginRight: "10px" }}>
          Manage
        </ManageButton>
      </Grid>
      <Grid item>
        <InviteButton variant="outlined">Invite</InviteButton>
      </Grid>
    </RowContainer>
  );
}

export default RowWidget;
