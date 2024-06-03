import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { green, grey } from '@mui/material/colors';
import './style.css';
import Ilu from '../../img/ilu.png';
function Welcome() {
  return (
    <Box className="welcome-screen" display="flex" flexDirection="column" alignItems="center" gap={2} flexWrap="wrap">
      <img src={Ilu} alt="Logo" />
      <Typography variant="h4" gutterBottom>
        Bem-vindo!
      </Typography>
      <Typography variant="body1" sx={{ color: grey[500], marginBottom: 4 }}>
        O seu tracker fit para acompanhar seus treinos diários.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/login"
        sx={{
          backgroundColor: green[500],
          '&:hover': {
            backgroundColor: green[700],
          },
        }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/cadastro"
        sx={{
          backgroundColor: green[500],
          '&:hover': {
            backgroundColor: green[700],
          },
        }}
      >
        Cadastro
      </Button>
    </Box>
  );
}

export default Welcome;
