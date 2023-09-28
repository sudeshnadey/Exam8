import React from "react";
import CustomCard from "../../components/shared/card";
import Button from "react-bootstrap/Button";
import TextCard from "../../components/dashboard/text-card";
import InvitationModal from "../../components/dashboard/invitaion_modal";
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
import { buttonStyle, outlineButtonStyle, useStyles } from "../../styles/dashboard/dashboard_styles";
import { useNavigate } from 'react-router-dom';
import AddInstitution from "../../components/dashboard/add_or_edit_insititute";
import Profile from "../../components/dashboard/profile";

const batchData = [
  { batchName: "Batch one", id: 1, batchCode: '2M62WDV', link: 'https://app.examin9.com/enroll/?batch_code=2M62WDV' },
  { batchName: "Batch two", id: 2, batchCode: '6762WDV', link: 'https://app.examin9.com/enroll/?batch_code=2M62WDV' },
  { batchName: "Batch three", id: 3, batchCode: '5M62WDV', link: 'https://app.examin9.com/enroll/?batch_code=2M62WDV' },
];


const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isAddInstitutionModaOpen, setInstitutionModalOpen] = React.useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = React.useState(false);
  const [selectedBatch, setSelectedBatch] = React.useState(null);

  const openModal = (batch) => {
    setSelectedBatch(batch);
    console.log(batch);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openInstitutionModal = () => {
    setInstitutionModalOpen(true);
  };

  const closeInstitutionModal = () => {
    setInstitutionModalOpen(false);
  };

  
  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };


  const handleStart = () => {
    navigate('/create-paper');
  };

  const classes = useStyles();
  return (
    <div className={classes.root} style={{ padding: "20px" }}>
      <Box height={80} />
      <TextCard>New dps public school</TextCard>
      <CustomCard cardTitle={"Generate New Question Paper"}>
        <Button onClick={handleStart} variant="contained" style={buttonStyle} >
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
              handleCardClick={() => {
                navigate('/create-paper');
              }}
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
              handleCardClick={() => {
                navigate('/view-papers');
              }}
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
              handleCardClick={() => {
                navigate('/my-questions');
              }}
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
              handleCardClick={() => {
                navigate('/blueprints');
              }}
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
        {batchData.map((batch, index) => (
          <RowWidget
            key={index}
            batchName={batch.batchName}
            handleInvite={() => {
              openModal(batch);
            }}
            handleManage={() => {
              navigate(`/batches/${batch.id}`);
            }}
          />

        ))}

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
              handleCardClick={() => {
                openInstitutionModal();
              }}
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
              handleCardClick={() => {
                navigate('/batches');
              }}
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
              handleCardClick={() => {
                navigate('/students');
              }}
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
              handleCardClick={() => {
                navigate('/teachers');
              }}
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
              handleCardClick={() => {
                openProfileModal();
              }}
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
              handleCardClick={() => {
                navigate('/my-subscription');
              }}
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
              handleCardClick={() => {
                navigate('/referral');
              }}
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
            Share Feedback
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
      {selectedBatch && (
        <InvitationModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          batchName={selectedBatch.batchName}
          batchCode={selectedBatch.batchCode}
          link={selectedBatch.link}
        />
      )}

      <Box height={3} />
      <AddInstitution
        isOpen={isAddInstitutionModaOpen}
        closeModal={closeInstitutionModal}
      />
      <Profile
        isOpen={isProfileModalOpen}
        closeModal={closeProfileModal}
      />
      <Footer />

    </div>
  );
};

export default Dashboard;
