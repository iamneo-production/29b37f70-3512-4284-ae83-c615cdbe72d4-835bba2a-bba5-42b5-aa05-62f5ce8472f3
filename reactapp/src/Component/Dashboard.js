import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import OrderManagementPage from './Order';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'; // Import Link from MUI
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Chart from './Chart';
import DashContext from './DashBoardC';
// Import Card, CardContent, and CardHeader
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LogoutIcon from '@mui/icons-material/Logout';
// Import necessary components and icons
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Navigate, useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import FragranceManagementPage from './FragranceManagement';
import CustomerManagementPage from './CustomerManagement';
// Define custom styling for the buttons
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransactionManagementPage from './TransactionManagement';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons
const buttonStyle = {
  padding: '25px 25px',
  left: '250px', // Adjust the padding values as needed
};
const footerStyle = {
  backgroundColor: '#1976D2',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#1976D2',
  ...(open && {
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
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const user = useSelector(selectUser);
  const userEmail = user.user && user.user.email ? user.user.email : 'Guest';
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState('dashboard');

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const handlePrivacy = () => {
    navigate('/policy')
  }
  const handleTerms = () => {
    navigate('/terms')
  }
  const handlefaq = () => {
    navigate('/faq')
  }
  const handleLogout = () => {
    navigate('/')
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'dashboard':
        return <DashContext />;
      case 'orders':
        return <OrderManagementPage />;
      case 'perfume':
        return <FragranceManagementPage />;
      case 'customer':
        return <CustomerManagementPage />;
      case 'transaction':
        return <TransactionManagementPage/>
      default:
        return null;
    }
  };


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex',}}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed\
               
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
                <br />
                Welcome, {userEmail}
              </Typography>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <LogoutIcon onClick={handleLogout} />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <React.Fragment>
                <ListItemButton
                  selected={selectedOption === 'dashboard'}
                  onClick={() => handleOptionSelect('dashboard')}
                >                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === 'orders'}
                  onClick={() => handleOptionSelect('orders')}
                >                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                  selected={selectedOption === 'customer'}
                  onClick={() => handleOptionSelect('customer')}
                  >
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                  selected={selectedOption === 'transaction'}
                  onClick={() => handleOptionSelect('transaction')}
                  >
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Transaction" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                  selected={selectedOption === 'perfume'}
                  onClick={() => handleOptionSelect('perfume')}
                  >
                    <CleaningServicesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Perfume" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" onClick={() => window.location.href = '/forgot'} />
                </ListItemButton>
              </React.Fragment>
              
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: 0,
              marginTop: '64px',
              transition: 'margin-left 225ms cubic-bezier(0.4, 0.0, 0.6, 1) 0ms',
            }}
          >
            {renderContent()}

          </Box>
        </Box>
      </ThemeProvider>
      <footer style={footerStyle}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* Add Links to Privacy Policy */}
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/privacy-policy"
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={handlePrivacy}
              >
                Privacy Policy
              </Button>
              <Typography variant="body2">
              </Typography>
              {/* Social Media Icons */}
              
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Add Links to Terms and Conditions */}
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/terms-and-conditions"
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={handleTerms}
              >
                Terms and Conditions
              </Button>
              <Typography variant="body2">
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Add Links to FAQ */}
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/faq"
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={handlefaq}
              >
                FAQ
              </Button>
              <Typography variant="body2">
  
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Add Links to Contact */}
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/contact"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Contact
              </Button>
              <Typography variant="body2">
                Email: contact@example.com
                <br />
                Phone: +1 (123) 456-7890
                <div>
      <FaFacebook onClick={() => window.open('https://www.facebook.com/')}/>
      <FaTwitter onClick={() => window.open('https://www.twitter.com/')}/>
      <FaInstagram onClick={() => window.open('https://www.instagram.com/')}/>
    </div>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}
