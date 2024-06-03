import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://full-tracker-back.vercel.app/api/users', { username, password, email });
      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h4" 
      sx={{ color: grey[200], 
        fontWeight: 'bold'
       }} gutterBottom>
        Cadastro
      </Typography>
      <Typography variant="body1"> 
        Preencha os campos abaixo para se cadastrar
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400, marginTop: 4 }}>
        <TextField
          label="Nome e sobrenome"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          InputLabelProps={{ style: { color: grey[300],  borderColor: grey[500] } }}
          InputProps={{
            style: { color: grey[300],  borderColor: grey[500] },
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
            backgroundColor: green[800] }} fullWidth>
          Registrar
        </Button>
      </form>
    </Box>
  );
};

export default Register;
