import React from 'react';

import{Box} from '@mui/material';
import{Stack} from '@mui/material';
import{Typography} from'@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <img src={HeroBannerImage} width="500" height="600" align="right" alt="hero-banner" className="hero-banner-img" />
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    
    <Typography fontSize="15px" fontFamily="Alegreya" lineHeight="25px">
      Check out the most effective exercises personalized to you
    </Typography>
   
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '400px' }}>
      Exercise
    </Typography>
    
  </Box>
);

export default HeroBanner;

