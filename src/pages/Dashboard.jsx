import React from "react";
import CustomCard from "../components/card";
import Button from "react-bootstrap/Button";
import "./dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../components/text-card";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core/";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuCard from "../components/menu_card";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import RowWidget from "../components/row_widget_with_buttons";
import TextWithLinkAndButton from "../components/text_wth_link_and_button";
import AndroidLinkAndButton from "../components/android_app_link";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import Divider from '@mui/material/Divider';

const buttonStyle = {
  backgroundColor: "#66BB6A",
  color: "white",
  marginRight: "10px",
  paddingTop: "5px",
  marginBottom: "5px",
};

const outlineButtonStyle = {
  border: "1px solid green",
  color: "#66BB6A",
  marginRight: "10px",
  paddingTop: "5px",
  marginBottom: "5px",
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#EDF3F7",
    minHeight: "100vh",
  },
});
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box height={80} />
      <TextCard />
      <CustomCard cardTitle={"Generate New Question Paper"}>
        <Button variant="contained" style={buttonStyle} color="success">
          Start
        </Button>
        <Button
          variant="outlined"
          style={outlineButtonStyle}
          className={classes.margin}
        >
          Tutorials
        </Button>
      </CustomCard>
      <CustomCard cardTitle={"Exams"}>
        <Grid container direction="row">
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <DescriptionOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Create Paper"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <ArticleOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"View Papers"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <TopicOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"My Questions"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <FolderCopyOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Blueprints"}
            />
          </Grid>
          <Grid item>
            <MenuCard
              icon={
                <TaskOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Evaluate"}
            />
          </Grid>
        </Grid>
      </CustomCard>

      <CustomCard cardTitle={"Batch Management"}>
        <RowWidget batchName={"Batch one"}/>
        <RowWidget batchName={"Batch two"}/>
        <RowWidget batchName={"Batch three"}/>
      </CustomCard>
      <CustomCard cardTitle={"Institute"}>
              <TextWithLinkAndButton />
              <AndroidLinkAndButton/>
              <Divider />
              <Box height={40} />
              <Grid container direction="row">
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <AccountBalanceOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"My Institute"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <SchoolOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Batches (3)"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <LocalLibraryOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Students (1)"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <CastForEducationOutlinedIcon
                  style={{ color: "#1ABC9C" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Teachers"}
            />
          </Grid>
         
        </Grid>
      </CustomCard>
    </div>
  );
};

export default Dashboard;
