// import banner from '../../Components/Media/banner.png';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import contactLinks from '../../Components/Constants/contactme.js';
import colors from '../../Components/Constants/colorscheme.js';

import LazyLoad from 'react-lazy-load';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grow from '@mui/material/Grow';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';

// import banner from '../../Components/Media/banner.png';
import ProfileImg from '../../Components/Media/AboutDP.jpg';
import './index.css';
// import { useLocation } from 'react-router-dom';

// import { styled } from '@mui/material/styles';


import { Carousel } from './extras.js';
import {programmingLanguages , tools} from './techstack.js';


const Item = (props) => {
  return (
      <div style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <div>
            <embed src={props.item.url} style={{width: '16rem',height: '12rem'}}></embed>
          </div>
      </div>
  );
}

const items = [
  {
    name: "Hackerrank-CSS",
    url: process.env.PUBLIC_URL+"/certificates/css certificate.pdf#view=Fit"
  },
  {
    name: "Hackerrank-ProblemSolving (Basic)",
    url: process.env.PUBLIC_URL+"/certificates/Problem Solving (Basic).pdf#view=Fit",
  },
  {
    name: "Hackerrank-Python (Basic)",
    url: process.env.PUBLIC_URL+"/certificates/python_basic certificate.pdf#view=Fit"
  },
  {
    name: "Hackerrank-React (Basic)",
    url: process.env.PUBLIC_URL+"/certificates/react_basic certificate.pdf#view=Fit",
  },
  {
    name: "Hackerrank-Python (Basic)",
    url: process.env.PUBLIC_URL+"/certificates/python_basic certificate.pdf#view=Fit"
  },
  {
    name: "Hackerrank-SQL (Basic)",
    url: process.env.PUBLIC_URL+"/certificates/sql_basic certificate.pdf#view=Fit",
  },
]

function About() {

  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const theme = createTheme({
      palette: {
          primary: {
              main: colors[2],
          },
          secondary: {
              main: colors[1]
          },
          text: {

          },
        },
  });

    return (
      <>
      <div>
      <ThemeProvider theme={theme}>
        <Grid sx={{display:'flex', justifyContent:'space-evenly', flexDirection: { xs: "column", md: "row" }}}>
          <Grid item sx={{ display:'flex', justifyContent:'center', padding: 5, minWidth: '55%'}}>
                <Card sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopRightRadius: 0, bgcolor: colors[0], backgroundPosition:'center', width: '35%'}}>
                </Card>
                <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0}}>
                    <CardContent>
                      <Typography variant='h4'>
                      <LazyLoad>
                        <Grow in={true}>
                          <Avatar alt="profilepic" src={ProfileImg} sx={{minHeight: 100, minWidth: 100, height: 180, width: 180, marginBottom: 3,  margin:2}} align="left"/>
                        </Grow >
                      </LazyLoad>
                      </Typography>
                      <Typography variant="h5" component="div">
                          <Grid rows={{ xs: 1}} columns={{ xs: 1 }} sx={{display:'flex',justifyContent:'space-between'}}>
                                <Grid item>
                                    Tabish Khalid Halim
                                </Grid>
                                <Grid item>
                                    <CardActions sx={{display:'inline',justifyContent:'flex-end'}}>
                                        <Button size="medium" href={contactLinks['resume']} variant="contained" color="secondary">Resume</Button>
                                    </CardActions>
                                </Grid>
                            </Grid>
                      </Typography>
                      <Typography sx={{ fontSize: 14 , mb: 1.5 }} color="text.secondary" gutterBottom>
                          B.Tech, CSE '24
                          <br/> <a href="https://www.iitdh.ac.in" >IIT Dharwad</a>
                      </Typography>
                      <Typography variant="body2">
                          <br/>
                          👋 Hey there, I'm Tabish, a final year Computer Science student at IIT Dharwad. I'm passionate about Full-Stack Development, Software Engineering, and Machine Learning.
                      </Typography>
                        <List
                              sx={{ width: '100%', bgcolor: 'background.paper' }}
                              aria-label="contacts"
                          >
                          <ListItem disablePadding key={1}>
                              <ListItemButton>
                              <ListItemIcon>
                                  <StarIcon />
                              </ListItemIcon>
                              <ListItemText secondary="🎓 With a knack for problem-solving and a flexible approach, I've honed my skills at one of India's top tech institutions." />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding key={2}>
                              <ListItemButton>
                              <ListItemIcon>
                                  <StarIcon />
                              </ListItemIcon>
                              <ListItemText secondary="💡 From crafting user-friendly interfaces to robust back-end systems, I love building practical solutions. Machine Learning also intrigues me as a way to create intelligent, data-driven tools."/>
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding key={3}>
                              <ListItemButton>
                              <ListItemIcon>
                                  <StarIcon />
                              </ListItemIcon>
                              <ListItemText secondary="🌐 Bridging technology and user experience is my forte. I'm ready to bring my skills to real-world projects and collaborate to create meaningful impact."/>
                              </ListItemButton>
                          </ListItem>
                          </List> 
                      <Grid rows={{ xs: 1}} columns={{ xs: 1 }} sx={{display:'flex',justifyContent:'space-between'}}>
                          <Grid item>
                              Thanks for visiting my portfolio. Explore my projects and experiences, and let's connect!
                          </Grid>
                      </Grid>
                    </CardContent>
                </Card>
          </Grid>
          <Grid item sx={{ display:'flex', justifyContent:'center', padding: 5, minWidth: '30%'}}>
                <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    <CardContent sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, bgcolor: colors[0], backgroundPosition:'center', height: '2.5%'}}>
                    </CardContent>
                    <CardContent>
                        <Typography variant='h4'>
                          Skills
                        </Typography>
                        <br/>
                        <Typography variant='h6' color="primary">
                          Programming Languages
                        </Typography>
                        <Typography variant='body1' color="secondary" fontWeight={600}>
                        {programmingLanguages.map((element)=>(
                          <Button key={element} variant="outlined" color="secondary" style={{margin:5}}>{element}</Button>
                        ))}
                        </Typography>
                        <br/>
                        <Typography variant='h6' color="primary">
                          Tools & Technologies
                        </Typography>
                        <Typography variant='body1' color="secondary" fontWeight={600} >
                        {tools.map((element)=>(
                          <Button key={element} variant="outlined" color="secondary" style={{margin:5}}>{element}</Button>
                        ))}
                        </Typography>
                    </CardContent>
                </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
      <div style={{display:'flex', justifyContent:'flex-start', padding: 5}}>
        <div style={{padding: '0 2rem'}}>
          <div className='home-heading' >
            Achievements corner: <br/>
            {items[carouselIndex]['name']}
          </div>
            <Carousel index={carouselIndex} updateIndex={setCarouselIndex} items={items} Item={Item} height={100} width={250}/>

        </div>
      </div>
      </>
    );
  }

export default About;