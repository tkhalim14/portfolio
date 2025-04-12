import React, {useState, useEffect} from 'react';

import {
  Grid, 
  Box,
} from '@mui/material';
import './index.css';
import LoadingOverlay from '../../Components/LoadingScreen/index.js';
import { banners } from './components';
import Carousel from '../../Components/Carousel/index';
import ProfileCard from './components/profileInfo';
import ExperiencesCorner from './components/experiencesCorner.js';
import ProfilePictureComponent from './components/profilePic.js';

const Item = (props) => {
  return (
      <Box style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <img 
            src={props.item.url} 
            style={{ 
              minWidth: '100%', 
              minHeight: '25vmin' 
            }} 
            alt={props.item.url}
            loading="lazy"
          />
      </Box>
  );
}


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const waitForLoad = async () => {
    // setsvgData(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    // localStorage.setItem('codeHasRun', 'true');
  };

  useEffect(() => {
    // const hasCodeRunBefore = localStorage.getItem('codeHasRun');
    // if(hasCodeRunBefore===true){
    //   // setIsLoading(false);   
    // }
    waitForLoad();
  }, []);

    return (
      <>
      <Box sx={{ flexGrow: 1, marginTop:'1vmax', padding: 4}}>
          <Grid container spacing={1} sx={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} style={{display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <ProfileCard/>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{justifyContent: {xs: 'flex-start', md: 'center'}, display:'flex', flexDirection: 'row'}}>
                <ProfilePictureComponent/>
            </Grid>
          </Grid>
          <ExperiencesCorner/>
      </Box>
      <Box style={{display:'flex', justifyContent:'center', flexDirection: 'row'}}>
          <Carousel items={banners} renderItems={Item}/>
      </Box>
      <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;