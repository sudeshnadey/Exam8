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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { makeStyles } from '@material-ui/core/styles';
import { ArticleOutlined, DescriptionOutlined } from '@mui/icons-material';
import TopicOutlined from '@mui/icons-material/TopicOutlined';

const EndButtonsContainer = styled('div')({
  marginLeft: 'auto',
});


const useStyles = makeStyles({
  paper: {
    background: 'black',
    color: 'white'
  }
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

  const styles = useStyles();


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
        <Divider />
        <List sx={{ bgcolor: "#001233" }}>
          {[
            { text: 'Dashboard', icon: <InboxIcon style={{  color: "#FF595A" }}/>, path: '/' },
            { text: 'Create Paper', icon: <DescriptionOutlined style={{  color: "#FF595A" }}/>, path: '/create-paper' },
            { text: 'View Papers', icon: <ArticleOutlined  style={{  color: "#FF595A" }}/>, path: '/view-papers' },
            { text: 'My Questions', icon: <TopicOutlined  style={{  color: "#FF595A" }}/>, path: '/my-questions' },
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
        <Divider />
        <List sx={{ bgcolor: "#001233" }}>
          {['Blueprints', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  );
}