import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core/";
import styled from "styled-components";

const CustomMenuCard = styled(Card)`
  && {
    box-shadow: 4px 3px 5px 3px #edf3f7; 
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: 10px 9px 12px 9px  #edf3f7;
    }
  }
`;
export default function MenuCard({ icon, text }) {
  return (
    <CustomMenuCard elevation={5}>
      <CardContent style={{ paddingRight:'60px', paddingLeft:'60px'}}>
        <Grid container direction="column" alignItems="center">
          <Grid item>{icon}</Grid>
          <Grid item>
            <Typography
              variant="h6"
              style={{ color: "#001233", fontSize: "16px" ,fontWeight: "bold" }}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </CustomMenuCard>
  );
}
