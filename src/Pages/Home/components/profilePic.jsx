import { Box } from "@mui/material";
import React from "react";
import ProfilePic from '../../../Components/Media/profilepic.jpg';
import '../index.css';

const ProfilePicStyles = {
  width: '300px', 
  height: '400px',
  backgroundPosition: 'center', 
  objectFit: 'cover',
  borderRadius: '1rem',
  boxShadow: '0 0 0.8rem white'
}

const ProfilePictureComponent = () => {

  return (
    <Box sx={{overflow: 'visible', position: 'relative', alignContent: 'center'}}> 
        <img
          src={ProfilePic}
          style={{ 
          ...ProfilePicStyles
          }}
          alt={ProfilePic}
        />
    </Box>
  );
}

export default ProfilePictureComponent;

