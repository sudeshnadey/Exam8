import React from "react";
import CustomCard from "../../components/shared/card";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextCard from "../../components/dashboard/text-card";
import { Box, Typography, List, ListItem } from "@material-ui/core";
import { Grid } from "@material-ui/core/";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuCard from "../../components/shared/menu_card";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import RowWidget from "../../components/shared/row_widget_with_buttons";
import TextWithLinkAndButton from "../../components/dashboard/text_wth_link_and_button";
import AndroidLinkAndButton from "../../components/dashboard/android_app_link";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Divider from "@mui/material/Divider";
import Footer from "../../components/shared/footer";

const buttonStyle = {
  backgroundColor: "#001233",
  color: "white",
  marginRight: "10px",
  paddingTop: "5px",
  marginBottom: "5px",
};

const outlineButtonStyle = {
  border: "1px solid #ff595a",
  color: "#001233",
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
    <div className={classes.root} style={{ padding: "20px" }}>
      <Box height={80} />
      <TextCard>New dps public school</TextCard>
      <CustomCard cardTitle={"Generate New Question Paper"}>
        <Button variant="contained" style={buttonStyle} >
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Evaluate"}
            />
          </Grid>
        </Grid>
      </CustomCard>

      <CustomCard cardTitle={"Batch Management"}>
        <RowWidget batchName={"Batch one"} />
        <RowWidget batchName={"Batch two"} />
        <RowWidget batchName={"Batch three"} />
      </CustomCard>
      <CustomCard cardTitle={"Institute"}>
        <TextWithLinkAndButton />
        <AndroidLinkAndButton />
        <Divider />
        <Box height={40} />
        <Grid container direction="row">
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <AccountBalanceOutlinedIcon
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
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
                  style={{ color: "#001233" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Teachers"}
            />
          </Grid>
        </Grid>
      </CustomCard>
      <CustomCard cardTitle={"My Account"}>
        <Grid container direction="row">
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <ManageAccountsOutlinedIcon
                  style={{ color: "#001233" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"My Profile"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <SubscriptionsOutlinedIcon
                  style={{ color: "#001233" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Subscription"}
            />
          </Grid>
          <Grid item style={{ marginRight: "40px" }}>
            <MenuCard
              icon={
                <AccountBalanceWalletOutlinedIcon
                  style={{ color: "#001233" }}
                  sx={{ fontSize: 100 }}
                />
              }
              text={"Refer & Earn"}
            />
          </Grid>
        </Grid>
      </CustomCard>
      <CustomCard cardTitle={"Feedback and Suggestions"}>
        <center>
          <Typography variant="h5">Feedback & Suggestions </Typography>
          <Box height={10} />
          <Typography>
            Please share your feedback and suggestions to make Test Generator
            the best software for you.{" "}
          </Typography>
          <Box height={10} />
          <Button variant="contained" style={buttonStyle} color="success">
            Share
          </Button>
        </center>
      </CustomCard>
      <CustomCard cardTitle={"Salient Features"}>
        <List>
          <ListItem>
            <Typography>- Create Question Papers</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Conduct Online Tests</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Upload Video Links</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Share Study Material</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Free Mobile App for Students</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Question Bank of 6 Lakh Questions</Typography>
          </ListItem>
        </List>
      </CustomCard>
      <Footer />
      <Box height={3} />
    </div>
  );
};

export default Dashboard;
