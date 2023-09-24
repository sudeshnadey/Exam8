import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { styled } from "@mui/material/styles";

const RowContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const ManageButton = styled(Button)(({ theme }) => ({
  color:  "#001233",
  borderColor: "#001233",
  "&:hover": {
    color: "#ff595a",
    backgroundColor: "#001233",
  },
}));

const InviteButton = styled(Button)(({ theme }) => ({
 
  color: "#ff595a",
  borderColor: "#ff595a",
  "&:hover": {
    color:"#001233",
    backgroundColor:  "#ff595a",
  },
}));

function RowWidget({batchName}) {
  return (
    <RowContainer container>
      <Grid item>
        <SchoolOutlinedIcon
          style={{ color: "#001233" }}
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
