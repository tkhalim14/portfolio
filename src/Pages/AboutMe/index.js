import * as React from 'react';
import LazyLoad from 'react-lazy-load';
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
  Tooltip,
  IconButton
} from '@mui/material';
import { EmojiEvents, Star } from '@mui/icons-material';
import ProfileImg from '../../Components/Media/AboutDP.jpg';
import { socialMediaLinks } from '../../app/contactMe.js';
import colors from '../../Components/Constants/colorScheme.js';
import './index.css';
import { certificates, programmingLanguages , tools } from './constants';
import Carousel from '../../Components/Carousel/index';
import ModalComponent from '../../Components/Modal/index.js';

const Item = (props) => {
  return (
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <div>
            <embed src={props.item.url} style={{width: '36vw', height: '66vh'}}></embed>
          </div>
      </div>
  );
}

const About = () => {

  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [ modalBool, setModalBool ] = React.useState(false);

    return (
      <>
      <ModalComponent
        title="My Trophies"
        open={modalBool}
        onClose={() => setModalBool(false)}
      >
        <Carousel index={carouselIndex} updateIndex={setCarouselIndex} items={certificates} renderItems={Item} marginBottom={0}/>
        <Box>
          {certificates[carouselIndex]['name']}
        </Box>
      </ModalComponent>
      <Box sx={{ display:'flex', justifyContent:'space-evenly', padding: 4, gap: 4, flexDirection: { xs: "column", md: "row" }}}>
        <Box sx={{ flex: 3, display:'flex', justifyContent:'center'}}>
              <Card sx={{ border: `2px solid ${colors[2]}`, padding: "4px 16px" }}>
                  <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                      <Typography variant='h4' component={"div"}>
                        <LazyLoad>
                          <Grow in={true}>
                            <Avatar 
                              alt="profilepic" 
                              src={ProfileImg} 
                              sx={{
                                minHeight: 100, 
                                minWidth: 100, 
                                height: 180, 
                                width: 180, 
                                marginBottom: 3,
                                border: `4px solid #FFF`
                              }} align="left"/>
                          </Grow >
                        </LazyLoad>
                      </Typography>
                      <Typography variant='h4' component={"div"}>
                        <Tooltip title="LeetCode Profile">
                          <IconButton href="https://leetcode.com/u/thesnagtalker007/">
                            <svg
                              fill={colors[2]}
                              width="24px"
                              height="22px"
                              viewBox="0 0 24 24"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                            </svg>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View Trophies">
                          <IconButton onClick={() => setModalBool(true)}>
                            <EmojiEvents color="secondary"/>
                          </IconButton>
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
        <Box sx={{ flex: 2, display:'flex', justifyContent:'center'}}>
              <Card sx={{ border: `2px solid ${colors[2]}`, padding: 2 }}>
                  <CardContent>
                      <Typography variant='h4'>
                        Skills
                        <hr/>
                      </Typography>
                      <Box sx={{height: '1rem'}}/>
                      <Typography variant='h6' sx={{width: 'max-content'}}>
                        Programming Languages
                        <hr/>
                      </Typography>
                      <Typography variant='body1' color="secondary" fontWeight={600}>
                      {programmingLanguages.map((element)=>(
                        <Button key={element} variant="outlined" color="secondary" style={{margin:5}}>{element}</Button>
                      ))}
                      </Typography>
                      <br/>
                      <Typography variant='h6' sx={{width: 'max-content'}}>
                        Tools & Technologies
                        <hr/>
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
      </>
    );
  }

export default About;