import React,{useState, useEffect} from 'react';

import Lottie from "lottie-react";

import banner from '../../Components/Media/banner.png'

import Card from '@mui/material/Card';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

import ProfileImg from '../../Components/Media/profilepic.jpg';

import './index.css';
import colors from '../../Components/Constants/colorscheme.js';
import Profile from './profilecard.js'
import LoadingOverlay from '../../Components/LoadingScreen/index.js';

import Timeline from '../Timeline/index.js';
// import Projects from '../Projects/index.js';

import LazyLoad from 'react-lazy-load';
import { Typography } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const [svgData, setsvgData] = useState();

  useEffect(() => {
    const hasCodeRunBefore = localStorage.getItem('codeHasRun');
    if(hasCodeRunBefore===true){
      // setIsLoading(false);   
    }
    import("../../Components/Media/homepage6.json")
    .then(async (data) =>{
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsLoading(false);
      setsvgData(data);
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