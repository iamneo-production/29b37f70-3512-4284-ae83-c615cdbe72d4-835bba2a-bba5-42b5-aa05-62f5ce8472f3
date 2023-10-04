import React from 'react';
import '../Asset/CSS/Terms and condition.css';
import { Link } from 'react-router-dom';
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
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome
const Header = () => {

    return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/dash">Home</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
    const navigate = useNavigate();
    const handlePrivacy = () => {
      navigate('/policy');
    };
  return (
    <footer>
     <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* Add Links to Privacy Policy */}
              <Button
                variant="text"
                color="inherit"
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
                to="/terms"
                style={{ color: 'white', textDecoration: 'none' }}
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
  );
};

const TermsAndConditions = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="terms-container">
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to Custom Fragrance and Creation Studio! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Custom Fragrance and Creation Studio if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2>1. Definitions</h2>
      <p>
        "Studio" refers to the Custom Fragrance and Creation Studio, which
        offers custom fragrance creation services.
      </p>
      <h2>2. Use of the Website</h2>
      <p>
        2.1. You must be at least 18 years old to use this Website. By using
        the Website, you represent and warrant that you are at least 18 years
        of age.
      </p>
      <p>
        2.2. You agree to use the Website for lawful purposes only and in a
        manner consistent with all applicable laws and regulations.
      </p>
      <h2>3. Privacy Policy</h2>
      <p>
        3.1. Your use of the Website is also governed by our Privacy Policy,
        which can be found [insert link to Privacy Policy].
      </p>
      <h2>4. Custom Fragrance Creation</h2>
      <p>
        4.1. The Studio offers custom fragrance creation services. The terms
        and conditions specific to these services will be provided separately
        during the ordering process.
      </p>
      <h2>5. Intellectual Property</h2>
      <p>
        5.1. All content on this Website, including but not limited to text,
        graphics, logos, images, and software, is the property of the Studio
        and is protected by copyright laws.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        6.1. The Studio shall not be liable for any direct, indirect,
        incidental, special, or consequential damages resulting from your use
        of this Website.
      </p>
      <h2>7. Changes to Terms and Conditions</h2>
      <p>
        7.1. The Studio reserves the right to modify or replace these terms
        and conditions at any time. Please check this page periodically for
        changes.
      </p>
      <h2>8. Contact Information</h2>
      <p>
        8.1. If you have any questions or concerns regarding these terms and
        conditions, please contact us at [insert contact information].
      </p>
      <p>
        By using this Website, you acknowledge that you have read, understood,
        and agreed to these terms and conditions.
      </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
