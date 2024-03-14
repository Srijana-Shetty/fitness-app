import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Switch } from '@mui/material';

import '../App.css';
import Logo from '../assets/images/Logo.png';

const Navbar = ({ darkmode, setdarkmode }) => {
 // Define styles for light and dark modes
 const linkStyle = {
    textDecoration: 'none',
    color: darkmode ? '#FFFFFF' : '#3A1212', // Change color based on darkmode
    borderBottom: darkmode ? '3px solid #FFFFFF' : '3px solid #FF2625', // Change border color based on darkmode
 };

 // Define styles for the logo image
 const logoStyle = {
    width: '48px',
    height: '48px',
    margin: '0 20px',
    filter: darkmode ? 'invert(1)' : 'none', // Invert colors to white in dark mode
 };

 return (
    <Stack 
      direction="row" 
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs:'40px'}, mt: { sm: "32px", xs: '20px'}, justifyContent:'none'}}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={logoStyle}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <a href="#exercises" style={linkStyle}>
          Exercises
        </a>
      </Stack>
      {/* Replace the button with the Switch component */}
      <Switch
        checked={darkmode}
        onChange={() => setdarkmode(!darkmode)}
        color="primary"
      />
    </Stack>
 );
};

export default Navbar;

