import banner from '../../Components/Media/banner.png';

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


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

// import { styled } from '@mui/material/styles';

import {programmingLanguages , tools} from './techstack.js';


function About() {

  React.useEffect(() => {
    document.body.style.backgroundImage = `url(${banner})`;
  });

  const theme = createTheme({
    palette: {
        primary: {
            main: colors[2],
            dark: colors[3]
        },
        secondary: {
            main: '#d32f2f',
            dark: colors[6]
        },
        text: {
        },
      },
});

  // const CustomButton = styled(Button)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiButton-outlined': {
  //     '&:hover': {
  //       color: '#FFF',
  //     }
  //   },
  // }));

    return (
      <>
      <div>
        <Grid sx={{display:'flex', justifyContent:'space-between', flexDirection:'column',mt:'5vh'}}>
          <Grid item sx={{ display:'flex', justifyContent:'center', padding: 5}}>
            <ThemeProvider theme={theme}>
                <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0, width:'60vw'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                          Tabish Khalid Halim
                      </Typography>
                      <Typography sx={{ fontSize: 14 , mb: 1.5 }} color="text.secondary" gutterBottom>
                          B.Tech, CSE'24
                          <br/> <a href="https://www.iitdh.ac.in" >IIT Dharwad</a>
                      </Typography>
                      <Typography variant="body2">
                          <br />
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
                          <Grid item>
                          <CardActions sx={{display:'inline',justifyContent:'flex-end'}}>
                            <Button size="small" href={contactLinks['resume']} variant="contained" color="secondary">Resume</Button>
                          </CardActions>
                          </Grid>
                      </Grid>
                    </CardContent>
                    
                </Card>
            </ThemeProvider>
          </Grid>
          <Grid item sx={{ display:'flex', justifyContent:'center', padding: 10, paddingBottom:6}}>
            <ThemeProvider theme={theme}>
                <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0, width:'60vw'}}>
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
                          <Button variant="outlined" color="secondary" style={{margin:5}}>{element}</Button>
                        ))}
                        </Typography>
                        <br/>
                        <Typography variant='h6' color="primary">
                          Tools & Technologies
                        </Typography>
                        <Typography variant='body1' color="secondary" fontWeight={600} >
                        {tools.map((element)=>(
                          <Button variant="outlined" color="secondary" style={{margin:5}}>{element}</Button>
                        ))}
                        </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>
      <div style={{position: 'relative',}}>
            
        </div>
      </>
    );
  }

export default About;