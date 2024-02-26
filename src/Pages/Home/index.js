import React,{useState, useEffect} from 'react';

import Lottie from "lottie-react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './index.css';
import Profile from './profilecard.js'
import LoadingOverlay from '../../Components/LoadingScreen/index.js';
import LazyLoad from 'react-lazy-load';


function Home() {

  const [isLoading, setIsLoading] = useState(true);

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
      <Box sx={{ flexGrow: 1, margin:'2vmax'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} style={{display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <Profile/>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{justifyContent:'center',display:'flex'}}>
              <Grid item sx={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
                <LazyLoad>
                  <Lottie animationData={svgData} loop={false} style={{minHeight: 250, minWidth: 250, width:'35vw'}}/>
                </LazyLoad>
              </Grid>
            </Grid>
          </Grid>
      </Box>
      <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;