import React, {useState, useEffect} from 'react';

import Lottie from "lottie-react";
import {Grid, Box} from '@mui/material';
import LazyLoad from 'react-lazy-load';
import './index.css';
import LoadingOverlay from '../../Components/LoadingScreen/index.js';
import { Card, banners, experiences } from './components';
import Carousel from '../../Components/Carousel/index';
import colors from '../../Components/Constants/colorscheme.js';
import ProfileCard from './components/profileInfo';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = (props) => {
  return (
      <div style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <img src={props.item.url} style={{ minWidth: '100%', minHeight: '50vh' }} alt={props.item.url}/>
      </div>
  );
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNav = (index) => {
    const length=experiences.length;
    const end=index+3;
    if(end>length || index<0){
      return;
    }
    else{
      setCarouselIndex(index);
    }
  }

  const [svgData, setsvgData] = useState();

  useEffect(() => {
    // const hasCodeRunBefore = localStorage.getItem('codeHasRun');
    // if(hasCodeRunBefore===true){
    //   // setIsLoading(false);   
    // }
    import("../../Components/Media/homepage6.json")
    .then(async (data) =>{
      setsvgData(data);
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsLoading(false);
      // localStorage.setItem('codeHasRun', 'true');
    });
  }, []);

    return (
      <>
      <Box sx={{ flexGrow: 1, margin:'1vmax 0 2vmax 2vmax'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} style={{display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <ProfileCard/>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{justifyContent:'center', display:'flex', flexDirection: 'column'}}>
                <LazyLoad>
                  <Lottie animationData={svgData} loop={false} style={{minHeight: 250, minWidth: 250, width:'35vw'}}/>
                </LazyLoad>
            </Grid>
          </Grid>
          <div name="controls" style={{display:'flex', justifyContent:'flex-end', padding: '1rem'}}>
            <button onClick={() => handleNav(carouselIndex-1)} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowBackIosIcon/>
            </button>
            <button onClick={() => handleNav(carouselIndex+1)} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowForwardIosIcon/>
            </button>
          </div>
          <Grid container>
            {experiences.map((ele, index) => {
              const valid = index>=carouselIndex && index<carouselIndex+3;
              if(valid){
                return(
                  <Grid className='experience-item' key={'exp'+index} item xs={12} md={4}>
                    <Card {...ele}/>
                  </Grid>
                );
              }
              else{
                return(
                  <Grid className='experience-item-none' key={'exp'+index} item xs={12} md={4}>
                    <Card {...ele}/>
                  </Grid>
                );
              }
            })}
          </Grid>
      </Box>
      <div style={{display:'flex', justifyContent:'center', flexDirection: 'row'}}>
          <Carousel items={banners} renderItems={Item}/>
      </div>
      <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;