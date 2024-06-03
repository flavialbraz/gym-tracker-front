
import { Link, Navigate } from "react-router-dom";
import './style.css';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { Bolt } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <Typography variant="h4"
          sx={{
            color: grey[200],
            fontWeight: 'bold'
          }} gutterBottom>
          Login
        </Typography>

        <Typography variant="body1">
          Preencha os campos abaixo para entrar
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400, marginTop: 4 }}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: grey[300] } }}
            InputProps={{
              style: { color: grey[300] },
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: grey[500],
                  },
                  '&:hover fieldset': {
                    borderColor: grey[500],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: green[800],
                  },
                },
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: grey[300], borderColor: grey[500] } }}
            InputProps={{
              style: { color: grey[300], borderColor: grey[500] },
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: grey[500],
                  },
                  '&:hover fieldset': {
                    borderColor: grey[500],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: green[800],
                  },
                },
              },
            }}
          />
          <Button type="submit" variant="contained"
            sx={{
              fontWeight: 'bold',
              padding: 2,
              marginTop: 4,
              backgroundColor: green[800]
            }} fullWidth>
            Registrar
          </Button>

          <Typography variant="body1"
          sx={{
            marginTop: 3
            
            }}>
            Não tem conta?
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/cadastro"
            sx={{
              fontWeight: 'bold',
              padding: 2,
              marginTop: 4,
              backgroundColor: green[800]
            }} fullWidth>
            Cadastre-se
          </Button>
        </form>
      </Box>
    </div>
  );

};

export default Login;