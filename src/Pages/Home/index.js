import React, {useState, useEffect} from 'react';

import Lottie from "lottie-react";
import {Grid, Box} from '@mui/material';
import LazyLoad from 'react-lazy-load';
import './index.css';
import Profile from './profilecard.js'
import LoadingOverlay from '../../Components/LoadingScreen/index.js';
import { Card, Carousel } from './extras.js';
import colors from '../../Components/Constants/colorscheme.js';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Item = (props) => {
  return (
      <div style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <div>
            <img src={props.item.url} style={{width: '100%',height: '25rem'}} alt={props.item.url}/>
          </div>
      </div>
  );
}

const items = [
  {
    url: process.env.PUBLIC_URL+"/images/Banner-1.png"
  },
  {
    url: process.env.PUBLIC_URL+"/images/autoreels-banner.png"
  },
  // {
  //   url: process.env.PUBLIC_URL+"/images/musipy-banner.png"
  // },
  // {
  //   url: process.env.PUBLIC_URL+"/images/multi-tridos.png"
  // }
]

const Experience = [
  {
    title: 'Teaching Assistant',
    subtitle: 'CS 203, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/TA.jpeg',
    description: 'Teaching Assistant for the Artificial Intelligence Lab course. Enabled students to learn the fundamentals of Artificial Intelligence. Guided in understanding complex concepts, evaluating assignments, and facilitating discussions to enhance learning.'
  },
  {
    title: 'Teaching Assistant',
    subtitle: 'CS103, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/TA.jpeg',
    description: 'Teaching Assistant for the Introduction to C Programming Course. Assessed and demonstrated 10 labs on basics of C & C++ programming including topics such as datatypes, operators, control statements, arrays, strings, pointers, functions, structures, file operations, classes, and objects.'
  },
  {
    title: 'SDE Intern',
    subtitle: 'Benam.me',
    image: process.env.PUBLIC_URL+'/images/Benam.jpeg',
    description: 'Led the development of an innovative automated video creation web-app engine, leveraging generative AI to produce human-like short video content based on user input parameters.'
  },
  {
    title: 'Public Relations',
    subtitle: 'Career Development Cell, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/PR.jpeg',
    description: 'As a Public Relations Coordinator at IIT Dharwad\'s Career Development Cell, I crafted narratives, managed social media, and organized events to enhance the institute\'s reputation. I fostered stakeholder relationships and supported professional growth.'
  },
  {
    title: 'Overall Coordinator',
    subtitle: 'PARSEC, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/OC.jpeg',
    description: 'As the Overall Coordinator for PARSEC, the annual techfest of the Indian Institute of Technology, Dharwad, I led a cross-functional team in organizing a premier platform for budding technologists to showcase their technical prowess. My role involved problem-solving, event planning, and public relations, ensuring a seamless and impactful experience for participants and attendees alike.'
  }
];

function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNav = (index) => {
    const length=Experience.length;
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
                <Profile/>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{justifyContent:'center', display:'flex', flexDirection: 'column'}}>
                <LazyLoad>
                  <Lottie animationData={svgData} loop={false} style={{minHeight: 250, minWidth: 250, width:'35vw'}}/>
                </LazyLoad>
            </Grid>
          </Grid>
          <div name="controls" style={{display:'flex', justifyContent:'flex-end'}}>
            <button onClick={() => handleNav(carouselIndex-1)} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowBackIosIcon/>
            </button>
            <button onClick={() => handleNav(carouselIndex+1)} style={{all: 'unset', cursor: 'pointer', color: colors[2]}}>
              <ArrowForwardIosIcon/>
            </button>
          </div>
          <Grid container style={{marginTop: '2rem'}}>
            {Experience.map((ele, index) => {
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
        <Carousel items={items} Item={Item}/>
      </div>
      <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;