import { Box } from "@mui/material";
import React from "react";
import ProfileLogo from '../../../Components/Media/logo.png';
import ProfilePic from '../../../Components/Media/profilepic.jpg';
import LazyLoad from "react-lazy-load";
import '../index.css';

const ProfilePicStyles = {
  width: '400px', 
  height: '500px',
  backgroundPosition: 'center', 
  objectFit: 'cover',
  borderRadius: '1rem',
  boxShadow: '0 0 0.8rem white'
}

const ProfilePictureComponent = () => {

  return (
    <Box sx={{overflow: 'visible', position: 'relative'}} className="flip-card">
      <Box className="flip-card-inner">
        <LazyLoad className="flip-card-front">
          <img
            src={ProfilePic}
            style={{ 
            ...ProfilePicStyles
            }}
            alt={ProfilePic}
          />
        </LazyLoad>
        <LazyLoad className="flip-card-back">
          <img
            src={ProfileLogo}
            style={{ 
            ...ProfilePicStyles
            }}
            alt={ProfileLogo}
          />
        </LazyLoad>
      </Box>
    </Box>
  );
}

export default ProfilePictureComponent;