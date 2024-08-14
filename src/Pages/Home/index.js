import React, {useState, useEffect} from 'react';

// import Lottie from "lottie-react";
import {
  Grid, 
  Box,
} from '@mui/material';
// import LazyLoad from 'react-lazy-load';
import './index.css';
import LoadingOverlay from '../../Components/LoadingScreen/index.js';
import { Card, banners, experiences } from './components';
import Carousel from '../../Components/Carousel/index';
import colors from '../../Components/Constants/colorScheme.js';
import ProfileCard from './components/profileInfo';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ProfilePic from '../../Components/Media/profilepic.jpg';

const Item = (props) => {
  return (
      <Box style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <img src={props.item.url} style={{ minWidth: '100%', minHeight: '25vmin' }} alt={props.item.url}/>
      </Box>
  );
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleNav = (id, direction) => {
    const element = document.getElementById(id);
    if(direction==="left")
      element.scrollTo({
        left: element.scrollLeft-490,
        behavior: 'smooth'
      });
    else
      element.scrollTo({
        left: element.scrollLeft+490,
        behavior: 'smooth'
      });
  }

  // const [svgData, setsvgData] = useState();

  useEffect(() => {
    // const hasCodeRunBefore = localStorage.getItem('codeHasRun');
    // if(hasCodeRunBefore===true){
    //   // setIsLoading(false);   
    // }
    import("../../Components/Media/homepage6.json")
    .then(async (data) =>{
      // setsvgData(data);
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsLoading(false);
      // localStorage.setItem('codeHasRun', 'true');
    });
  }, []);

    return (
      <>
      <Box sx={{ flexGrow: 1, marginTop:'1vmax', padding: 4}}>
          <Grid container spacing={1} sx={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} style={{display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <ProfileCard/>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{justifyContent: {xs: 'flex-start', md: 'center'}, display:'flex', flexDirection: 'row'}}>
                {/* <LazyLoad>
                  <Lottie animationData={svgData} loop={false} style={{minHeight: 250, minWidth: 250, width:'35vw'}}/>
                </LazyLoad> */}
                <Box sx={{height: '100%', minHeight: '300px', overflow: 'visible'}}>
                  <Box style={{
                    backgroundImage: `
                    -webkit-linear-gradient(top, 
                      rgba(0,0,0,0.9) 0%, 
                      rgba(0,0,0,0) 10%,
                      rgba(0,0,0,0) 90%,
                      rgba(0,0,0,0.9) 100%
                    ),
                    -webkit-linear-gradient(left, 
                      rgba(0,0,0,9) 0%, 
                      rgba(0,0,0,0) 20%,
                      rgba(0,0,0,0) 60%,
                      rgba(0,0,0,0.5) 80%,
                      rgba(0,0,0,0.9) 100%
                    ),
                      url(${ProfilePic})
                    `, 
                    width: '400px', 
                    height: '100%',
                    backgroundPosition: 'center', 
                    backgroundSize: '400px'
                  }}/>
                </Box>
            </Grid>
          </Grid>
          <Box name="controls" style={{display:'flex', justifyContent:'flex-end', padding: '1rem'}}>
            <button onMouseDown={() => handleNav("star-experiences", "left")} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowBackIos/>
            </button>
            <button onMouseDown={() => handleNav("star-experiences", "right")} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowForwardIos/>
            </button>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', gap: 24, width: '100%', overflow: 'hidden'}} id="star-experiences">
            {experiences.map((ele, index) => {
              return(
                <Box key={'exp'+index} sx={{width: '300px'}}>
                  <Card {...ele}/>
                </Box>
              );
            })}
          </Box>
      </Box>
      <Box style={{display:'flex', justifyContent:'center', flexDirection: 'row'}}>
          <Carousel items={banners} renderItems={Item}/>
      </Box>
      <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;