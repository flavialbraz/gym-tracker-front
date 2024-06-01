import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';

function Footer() {

  return (

        <BottomNavigation
          showLabels
          sx={{ width: '100%', position: 'fixed', bottom: 0 }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Perfil" icon={<AccountCircleIcon />} />
        </BottomNavigation>

  );
}

export default Footer;
