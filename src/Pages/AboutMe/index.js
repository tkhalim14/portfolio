import * as React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link, useLocation } from 'react-router-dom';
import { 
  Avatar, 
  Grow, 
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Grid,
  Box, 
  Tooltip
} from '@mui/material';
import { EmojiEvents, Star } from '@mui/icons-material';
import ProfileImg from '../../Components/Media/AboutDP.jpg';
import { socialMediaLinks } from '../../app/contactMe.js';
import colors from '../../Components/Constants/colorScheme.js';
import './index.css';
import { certificates, programmingLanguages , tools } from './constants';
import Carousel from '../../Components/Carousel/index';

const Item = (props) => {
  return (
      <div style={{padding: '2rem', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <div>
            <embed src={props.item.url} style={{width: '16rem',height: '12rem'}}></embed>
          </div>
      </div>
  );
}

const About = () => {

  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const location = useLocation();

  function scrollToTargetAdjusted(element){
    window.scrollTo({
         top: element.getBoundingClientRect().top + window.scrollY - 100,
         behavior: "smooth"
    });
}

  React.useEffect(()=>{
    const element = document.getElementById(location.state?.goto);
    if(element){
      scrollToTargetAdjusted(element);
    }
  },[location]);

    return (
      <>
      <div>
          <Box sx={{ display:'flex', justifyContent:'space-evenly', flexDirection: { xs: "column", md: "row" }}}>
            <Box sx={{ flex: 3, display:'flex', justifyContent:'center', padding: 5}}>
                  <Card sx={{ border: `2px solid ${colors[2]}`, padding: "4px 16px" }}>
                      <CardContent>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                          <Typography variant='h4' component={"div"}>
                            <LazyLoad>
                              <Grow in={true}>
                                <Avatar alt="profilepic" src={ProfileImg} sx={{minHeight: 100, minWidth: 100, height: 180, width: 180, marginBottom: 3,  margin:2}} align="left"/>
                              </Grow >
                            </LazyLoad>
                          </Typography>
                          <Typography variant='h4' component={"div"}>
                            <Tooltip title="View Trophies">
                              <Link state={{ goto: "trophies" }}>
                                <EmojiEvents color="secondary"/>
                              </Link>
                            </Tooltip>
                          </Typography>
                        </Box>
                        <Typography variant="h5" component="div">
                            <Grid rows={{ xs: 1}} columns={{ xs: 1 }} sx={{display:'flex',justifyContent:'space-between'}}>
                                  <Grid item>
                                      Tabish Khalid Halim
                                  </Grid>
                                  <Grid item>
                                      <CardActions sx={{display:'inline',justifyContent:'flex-end'}}>
                                          <Button size="medium" href={socialMediaLinks['resume']} variant="contained" color="secondary">Resume</Button>
                                      </CardActions>
                                  </Grid>
                              </Grid>
                        </Typography>
                        <Typography sx={{ fontSize: 14 , mb: 1.5, color: colors[4] }} gutterBottom>
                            B.Tech, CSE '24
                            <br/> <a href="https://www.iitdh.ac.in" style={{color: colors[3]}}>IIT Dharwad</a>
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
                                    <Star color="secondary"/>
                                </ListItemIcon>
                                <ListItemText secondary="🎓 With a knack for problem-solving and a flexible approach, I've honed my skills at one of India's top tech institutions." />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding key={2}>
                                <ListItemButton>
                                <ListItemIcon>
                                    <Star color="secondary"/>
                                </ListItemIcon>
                                <ListItemText secondary="💡 From crafting user-friendly interfaces to robust back-end systems, I love building practical solutions. Machine Learning also intrigues me as a way to create intelligent, data-driven tools."/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding key={3}>
                                <ListItemButton>
                                <ListItemIcon>
                                    <Star color="secondary"/>
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
            </Box>
            <Box sx={{ flex: 2, display:'flex', justifyContent:'center', padding: 5}}>
                  <Card sx={{ border: `2px solid ${colors[2]}`, padding: 2 }}>
                      <CardContent>
                          <Typography variant='h4'>
                            Skills
                            <hr/>
                          </Typography>
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
            </Box>
          </Box>
      </div>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'flex-start', padding: 4}}>
        <div style={{padding: '1rem 2rem'}}>
          <div className='home-heading' style={{color: colors[2]}}>
            <label id="trophies">Trophies corner:</label> <br/>
            {certificates[carouselIndex]['name']}
          </div>
        </div>
        <Carousel index={carouselIndex} updateIndex={setCarouselIndex} items={certificates} renderItems={Item} width={250}/>
      </div>
      </>
    );
  }

export default About;