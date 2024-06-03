import React from 'react';
import { Button, Typography } from '@mui/material';
import './style.css';

function Welcome() {
  const { login } = useAuth();

  return (
    <div className="welcome-screen">
      <Typography variant="h4" gutterBottom>
        Bem-vindo! Por favor, faça login para continuar.
      </Typography>
      <Button variant="contained" color="primary" onClick={login}>
        Login
      </Button>
    </div>
  );
}

export default Welcome;
function useAuth(): { login: any; } {
  throw new Error('Function not implemented.');
}

