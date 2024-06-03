import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Router>
        <div style={{ paddingBottom: '56px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
    </Router>
    </div>

    <Router>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
