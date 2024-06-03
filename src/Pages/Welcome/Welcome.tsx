import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

function Welcome() {
  return (
    <div className="welcome-screen">
      <Typography variant="h4" gutterBottom>
        Bem-vindo! Por favor, faça login para continuar.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Login
      </Button>
    </div>
  );
}

export default Welcome;
