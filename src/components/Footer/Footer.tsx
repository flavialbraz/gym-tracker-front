import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey } from '@mui/material/colors';

function Footer() {
  return (
    <BottomNavigation
      showLabels
      sx={{ width: '100%', position: 'fixed', bottom: 0,
      backgroundColor: grey[900],
      color: grey[100],
      padding: '10px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.20)'
    }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
        sx={{ color: grey[300] }}
      />
      <BottomNavigationAction
        label="Perfil"
        icon={<AccountCircleIcon />}
        component={Link}
        to="/profile"
        sx={{ color: grey[300] }}
      />
    </BottomNavigation>
  );
}

export default Footer;
