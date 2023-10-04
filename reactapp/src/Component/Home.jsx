import * as React from 'react';
import '../Asset/CSS/Home.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { CarousalActive } from './CarousalActive';
import Grid from '@mui/material/Grid';
import image1 from '../custom1.jpg';
import image2 from '../custom2.jpg';
import image3 from '../custom3.jpg';
import image4 from '../custom4.jpg';
import image5 from '../custom5.jpg';
import image6 from '../custom6.jpg';
import image7 from '../custom7.jpg';
import image8 from '../custom8.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const footerStyle = {
  backgroundColor: '#1976D2',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const [searchValue, setSearchValue] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePrivacy = () => {
    navigate('/policy');
  };
  const handleTerms = () => {
    navigate('/terms');
  };
  const handlefaq = () => {
    navigate('/faq');
  };

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: '#1976D2' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'serif',
                  fontWeight: 1000,
                  letterSpacing: '.3rem',
                  color: 'rgb(234, 94, 34)',
                  textDecoration: 'none',
                }}
              >
                PerfumePalette
              </Typography>

              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Button
                  onClick={() => navigate('/home')}
                  sx={{
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    backgroundColor: 'transparent',
                    fontSize: '1.2rem',
                    padding: '15px 30px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      color: 'black',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    backgroundColor: 'transparent',
                    fontSize: '1.2rem',
                    padding: '15px 30px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      color: 'black',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Custom Perfume
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  sx={{
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    backgroundColor: 'transparent',
                    fontSize: '1.2rem',
                    padding: '15px 30px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      color: 'black',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  About us
                </Button>
                <Button
                  onClick={() => navigate('/service')}
                  sx={{
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    backgroundColor: 'transparent',
                    fontSize: '1.2rem',
                    padding: '15px 30px',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'black',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Services
                </Button>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  sx={{ color: 'white', marginLeft: '5px', borderRadius: '5px' }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                    <Avatar alt="Shreethic" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <CarousalActive />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Welcome to PerfumePalette - Craft Your Signature Scent</h3>
          <h4>Unlock the art of fragrance creation with PerfumePalette, your custom fragrance studio application.<br />
            Experience the joy of designing a scent that truly embodies you. Whether it's a personal statement or a unique gift,<br />
            our platform empowers you to curate scents that leave a lasting impression.</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Featured Fragrance Collections</h3>
          <h4>Explore our curated collections, each designed to evoke distinct moods and experiences. <br />
            From vibrant florals to sultry orientals, find the perfect inspiration for your bespoke creation.<br /></h4>
            <Button
          onClick={() => navigate('/custom-perfume')}
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            display: 'block',
            margin: 'auto',
            marginTop: '20px',
          }}
        >
          Create Custom Perfume
        </Button>
        </div>
        <div className='card' style={{ display: 'flex', gap: '5%', marginTop: '3%', marginBottom: '3%', marginLeft: '3%', marginRight: '3%' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image1}
                alt="Floral Aldehyde"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Floral Aldehyde
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Floral Aldehyde is an iconic fragrance known for its sophisticated blend of floral and aldehyde.
                  It exudes timeless elegance and luxury and femininity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image2}
                alt="Dior J'adore"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dior J'adore
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  J'adore is a modern and opulent floral fragrance with a radiant and sensuous character.
                  This perfume embodies feminine grace, tuberose, orchid, and allure.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image3}
                alt="Creed Aventus"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Creed Aventus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aventus is a contemporary and masculine fragrance known for its fresh and fruity opening combined with a rich woody base
                  oakmoss, jasmine, and ambergris.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image4}
                alt="Colonia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Colonia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Colonia is a classic Italian fragrance known for its timeless blend of citrus
                  refreshing burst of lemon, Bulgarian rose, sweet orange, bergamot, and aromatic.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='card' style={{ display: 'flex', gap: '5%', marginTop: '3%', marginBottom: '3%', marginLeft: '3%', marginRight: '3%' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image5}
                alt="Byredo Gypsy Water"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Byredo Gypsy Water
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gypsy Water is a bohemian and woody fragrance known for its blend of earthy, citrus,
                  bergamot, lemon, pepper, amber, and woody notes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image6}
                alt="Gucci Bloom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gucci Bloom
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gucci Bloom is a modern and rich white floral fragrance.
                  It features dominant notes of tuberose, jasmine, creating vitality and intoxicating scent.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image7}
                alt="Tom Ford Black Orchid"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tom Ford Black Orchid
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Black Orchid is a luxurious and mysterious fragrance known for its opulent blend of dark florals and rich,
                  black truffle, bergamot, and earthy notes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image8}
                alt="Guerlain Shalimar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Guerlain Shalimar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shalimar is a legendary oriental fragrance known for its timeless elegance, sensuality
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
       
      </div>
      <Box mt="auto">
      </Box>
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

export default ResponsiveAppBar;
