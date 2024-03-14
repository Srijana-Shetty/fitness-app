import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = ({ darkmode }) => {
 
 const footerStyle = {
    mt: "80px",
    bgcolor: darkmode ? "#1c1917" : "#fff3f4", // Change background color based on darkmode
 };

 
 const logoStyle = {
    width: "200px",
    height: "40px",
    filter: darkmode ? 'invert(1)' : 'none', 
 };

 return (
    <Box sx={footerStyle}>
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={logoStyle} />
        <Typography variant='h5' pb="40px" mt="20px">
          ❤️
        </Typography>
      </Stack>
    </Box>
 );
};

export default Footer;


