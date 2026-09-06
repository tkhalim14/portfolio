import React, {useState, useEffect} from 'react';

import {
  Grid, 
  Box,
} from '@mui/material';
import './index.css';
import LoadingOverlay from '../../Components/LoadingScreen';
import { banners } from '../../app/profileHistory';
import Carousel from '../../Components/Carousel';
import ProfileCard from './components/profileInfo';
import ExperiencesCorner from './components/experiencesCorner';
import ProfilePictureComponent from './components/profilePic';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
      <>
      <Box sx={{ flexGrow: 1, marginTop:'1vmax', padding: 4}}>
          <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
            <Grid
                size={{ xs: 12, md: 6 }}
                order={{ xs: 2, md: 1 }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <ProfileCard />
            </Grid>

            <Grid
                size={{ xs: 12, md: 6 }}
                order={{ xs: 1, md: 2 }}
                sx={{
                justifyContent: { xs: 'flex-start', md: 'center' },
                display: 'flex',
                flexDirection: 'row'
                }}
            >
                <ProfilePictureComponent />
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

