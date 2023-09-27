import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ArticleOutlined, DescriptionOutlined } from '@mui/icons-material';
import TopicOutlined from '@mui/icons-material/TopicOutlined';
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
const EndButtonsContainer = styled('div')({
  marginLeft: 'auto',
});


const WhiteIconButton = styled(IconButton)({
  color: '#FF595A',
  border: `1px solid #FF595A`,
  borderRadius: '50%',
  padding: "5px",
  marginLeft: '10px',

});


const drawerWidth = 240;

const openedMixin = (theme) => ({

  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  color: '#FF595A',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    color: '#FF595A',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...(open ? openedMixin(theme) : closedMixin(theme)),
        background: '#001233', 
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        background: '#001233', 
      }
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "#001233" }} position="fixed" open={open} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>


          <EndButtonsContainer>
            <WhiteIconButton>
              <CardGiftcardIcon style={{ fontSize: '19px', color: "#FF595A" }} />
            </WhiteIconButton>
            <WhiteIconButton>
              <QuestionMarkIcon style={{ fontSize: '19px', color: "#FF595A" }} />
            </WhiteIconButton>
            <WhiteIconButton>
              <PermIdentityIcon style={{ fontSize: '19px', color: "#FF595A" }} />
            </WhiteIconButton>
          </EndButtonsContainer>


        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} paperprops={{
        sx: {
          backgroundcolor: "#001233"
        }
      }}  >
        <DrawerHeader sx={{ bgcolor: "#001233" }}>
          <IconButton onClick={handleDrawerClose} style={{ color: "#ff595a" }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List sx={{ bgcolor: "#001233",color:"#ffffff" }}>
          {[
            { text: 'Dashboard', icon: <HomeOutlinedIcon style={{  color: "#FFFFFF" }}/>, path: '/' },
            { text: 'Create Paper', icon: <DescriptionOutlined style={{  color: "#FFFFFF" }}/>, path: '/create-paper' },
            { text: 'View Papers', icon: <ArticleOutlined  style={{  color: "#FFFFFF" }}/>, path: '/view-papers' },
            { text: 'My Questions', icon: <TopicOutlined  style={{  color: "#FFFFFF" }}/>, path: '/my-questions' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton component={Link} to={item.path} sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ background: 'white', margin: 0 }} variant="inset" />
        <List sx={{ bgcolor: "#001233",color:"#ffffff" }}>
          {[
            { text: 'Blueprints', icon: <FolderCopyOutlinedIcon style={{  color: "#FFFFFF" }}/>, path: '/blueprints' },
            { text: 'My Instituite', icon: <AccountBalanceOutlinedIcon style={{  color: "#FFFFFF" }}/>, path: '/create-paper' },
            { text: 'Batchs', icon: <SchoolOutlinedIcon  style={{  color: "#FFFFFF" }}/>, path: '/batches' },
            { text: 'Students', icon: <LocalLibraryOutlinedIcon  style={{  color: "#FFFFFF" }}/>, path: '/students' },
            { text: 'Teachers', icon: <CastForEducationOutlinedIcon  style={{  color: "#FFFFFF" }}/>, path: '/teachers' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton component={Link} to={item.path} sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider style={{ background: 'white', margin: 0 }} variant="inset" />
        <List sx={{ bgcolor: "#001233",color:"#ffffff" }}>
          {[
            { text: 'Refer & Earn', icon: <AccountBalanceWalletOutlinedIcon style={{  color: "#FFFFFF" }}/>, path: '/referral' },
            { text: 'Subscriptions', icon: <SubscriptionsOutlinedIcon style={{  color: "#FFFFFF" }}/>, path: '/my-subscription' },
            { text: 'My Orders', icon: <FilterNoneOutlinedIcon  style={{  color: "#FFFFFF" }}/>, path: '/view-papers' },
          
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton component={Link} to={item.path} sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  );
}