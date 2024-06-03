import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import { green, grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[800],
      },
    },
  });
  return (
    <div className="App">
      <div className="container"> 
        <Router>
        <div style={{ paddingBottom: '56px' }}>
          <Routes>
           <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
    </Router>
    </div>

    </div>
  );
}

export default App;
