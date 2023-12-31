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

  const [expanded, setExpanded] = React.useState(true);

  // const [project_expanded, setproject_Expanded] = React.useState(false);

  const handleChange = (panel, setPanel) => (event, isExpanded) => {
    setPanel(isExpanded ? panel : false);
  };

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
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Card sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, bgcolor: colors[2], backgroundImage: 'url('+banner+')', backgroundPosition:'center'}}>
                  <LazyLoad>
                    <Grow in={true}>
                      <Avatar alt="profilepic" src={ProfileImg} sx={{minHeight: 100, minWidth: 100, height: '10vw', width: '10vw', margin:2, marginBottom: 1.5}} align="left"/>
                    </Grow >
                  </LazyLoad>
                </Card>
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
        {/* <Box sx={{ flexGrow: 1, margin:'2vmax'}}>
          <Accordion expanded={project_expanded} onChange={handleChange(!project_expanded,setproject_Expanded)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary"/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{backgroundColor: colors[1]}}
            >
              <Typography variant="h3" sx={{color: colors[2]}}>
                Explore
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Here's a list of my most captivating projects I've done/worked on.
              </Typography>
              <Projects priority_bool={true}/>
            </AccordionDetails>
          </Accordion>
        </Box> */}
        <Box sx={{ flexGrow: 1, margin:'2vmax'}}>
          <Accordion expanded={expanded} onChange={handleChange(!expanded,setExpanded)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary"/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{backgroundColor: colors[1]}}
            >
              <Typography variant="h3" sx={{color: colors[2]}}>
                Timeline
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Discover my creative journey through milestones, projects, and growth. This timeline unveils the path that shaped my skills and perspective.
              </Typography>
              <Timeline/>
            </AccordionDetails>
          </Accordion>
        </Box>
        <LoadingOverlay open={isLoading}/>
      </>
    );
  }
  
  export default Home;