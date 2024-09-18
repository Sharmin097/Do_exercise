
import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym2.png'

const BodyPart = ({item, setBodyPart, bodyPart }) => {
  return (
   
    <Stack  type="button"
    alignItem="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '40px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '40px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    > 
     <img src={Icon} alt="icon" style={{ width: '40px', height: '40px', margin: '0px 20px' }} />
   

    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>

    </Stack>
  )
}

export default BodyPart

