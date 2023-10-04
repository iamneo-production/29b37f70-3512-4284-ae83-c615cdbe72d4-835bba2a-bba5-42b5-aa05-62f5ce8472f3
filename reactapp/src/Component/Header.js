// Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#1976D2', // Change this to your desired color
  };

  return (
    <AppBar position="fixed" style={headerStyle}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          PERFUME PALETTE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
