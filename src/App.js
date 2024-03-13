import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { DarkModeProvider, DarkModeContext } from './DarkModeContext'; // Import both DarkModeProvider and DarkModeContext

import './App.css';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
 const { darkMode } = useContext(DarkModeContext);

 return (
    <DarkModeProvider>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" className={darkMode ? 'dark-theme' : ''}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </DarkModeProvider>
 );
};

export default App;
