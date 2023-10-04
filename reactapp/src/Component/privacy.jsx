// PrivacyPolicy.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import '../Asset/CSS/privacy.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome

const buttonStyle = {
  padding: '25px 25px',
  left: '250px',
};

const footerStyle = {
  backgroundColor: '#1976D2',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

const drawerWidth = 240;

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const handlePrivacy = () => {
    navigate('/policy');
  };
  const handleTerms = () => {
    navigate('/terms');
  };
  
  return (
    <>
    <Header/>
    <div className="container">
      <br/>
      <br/>
      <br/>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to the Custom Fragrance Creation Studio's Privacy Policy. At Custom Fragrance Creation Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you use our Custom Fragrance Creation Studio services, we may collect the following types of information:
      </p>
      <ul>
        <li>Your name, email address, and contact information when you create an account or contact us.</li>
        <li>Information about your fragrance preferences and choices when using our custom fragrance creation tools.</li>
        <li>Information about your orders and transactions with us, including payment details.</li>
        <li>Information about your device, browser, and how you interact with our website.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>Creating and managing your account.</li>
        <li>Customizing and personalizing your fragrance creation experience.</li>
        <li>Processing and fulfilling your orders.</li>
        <li>Communicating with you about your orders and providing customer support.</li>
        <li>Improving our website, products, and services.</li>
        <li>Marketing and promotional purposes, with your consent.</li>
      </ul>
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and providing our services.
      </p>
      <h2>Security</h2>
      <p>
        We take data security seriously and have implemented measures to protect your information. However, no method of transmission over the internet or electronic storage is entirely secure.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        Custom Fragrance Creation Studio may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically for any changes.
      </p>
    </div>
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
};

export default PrivacyPolicy;
