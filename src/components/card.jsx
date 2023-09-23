import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#F8F9F9",
    color: "#2196F3",
    fontSize: "6px !important",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          "&:hover": {
            borderColor: "red", // Set the desired hover color
          },
        },
      },
    },
  },
});


export default function CustomCard({ cardTitle, children }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: "20px" }} elevation={0}>
      <CardHeader
        className={classes.header}
        title={cardTitle}
        classes={{ title: classes.title }}
      ></CardHeader>
      <CardContent style={{ marginTop: "20px", marginBottom: "20px" }}>
        { children }
      </CardContent>
    </Card>
  );
}
