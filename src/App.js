import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';



const App = () => {
   const [darkmode, setdarkmode] = useState(false);
   const getDesignTokens = (mode) => ({
    palette: {
            mode,
            ...(mode === 'dark'
                ? {
                        background: {
                            default: '#1c1917',
                            paper: '#fff',
                        },
                }
                : {
                        background: {
                            default: '#fae8ff',
                            paper: '#fff',
                        },
                }),
            text: {
                ...(mode === 'light'
                    ? {
                            primary: grey[900],
                            secondary: grey[800],
                    }
                    : {
                            primary: '#fff',
                            secondary: grey[500],
                    }),
            },
        },
    });
    let mode = darkmode ? 'dark' : 'light';
  const darkTheme = createTheme(getDesignTokens(mode));
   

 return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box 
      width="400px" 
      sx={{ width: { xl: '1488px' } }} 
      m="auto" >
        <Navbar 
          darkmode={darkmode}
          setdarkmode={setdarkmode}
        />
        <Routes>
          <Route 
           path="/" 
            element={<Home />} />
          <Route 
               path="/exercise/:id" 
              element={<ExerciseDetails />} />
        </Routes>
        <Footer 
          darkmode={darkmode}
          
        />
      </Box>

    </ThemeProvider>
      
    
 );
};

export default App;

