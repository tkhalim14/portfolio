import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";

import colors from '../../Components/Constants/colorscheme.js';
import contactLinks from '../../Components/Constants/contactme.js';


export default function BasicCard() {

    const theme = createTheme({
        palette: {
            primary: {
                main: colors[2]
            },
            secondary: {
                main: '#d32f2f'
            },
            text: {
            },
          },
    });

    const Fields =  ['Artificial Intelligence', 'Application Development', 'Competitive Programming', 'UI/UX Design', 'Open Source Work']
  const Topics = () => {
      return (
              <Fade>
              <Typewriter
                options={{
                  loop: true,
                  deleteSpeed: 10,
                  delay: 30,
                }}
                   onInit={(typewriter) => {
                    const words = Fields;
                    typewriter.typeString("I live in a world of ");
                    
                      for (let index = 0; index < words.length; index++) {
                        typewriter.typeString(words[index]).pauseFor(1200).deleteChars(words[index].length);
                      }
                     typewriter.start();
                  }}
              />
              </Fade>
      )
  }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                <CardContent>
                        <Typography variant="h5">
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
                            B.Tech, CSE'24
                            <br/> <a href="https://www.iitdh.ac.in" >IIT Dharwad</a>
                        </Typography>
                        <span style={{fontWeight:600, color: '#d32f2f'}}>
                            <Topics />
                            <br/>
                        </span>
                        <Typography>
                        I am Tabish, currently enrolled in the pursuit of a B.Tech degree in Computer Science and Engineering at IIT Dharwad. I am characterized by my passion and dedication towards coding, consistently striving to enhance my skills and delve into novel realms. My commitment to self-improvement and exploration remains steadfast.
                        <br/><br/>
                        {/* <Typography variant='body1' sx={{paddingBottom:1}}>Programming Languages : C, C++ & Python</Typography>
                        <Typography variant='body2' sx={{paddingBottom:1}}>Ex-SDE Intern @Benam | LeetCode 400+</Typography> */}
                        </Typography>
                        <Grid rows={{ xs: 1}} columns={{ xs: 1 }} sx={{display:'flex',justifyContent:'space-between'}}>
                          <Grid item>
                              Thanks for visiting my portfolio. Explore my projects and experiences, and let's connect!
                          </Grid>
                          {/* <Grid item>
                              <CardActions sx={{display:'inline',justifyContent:'flex-end'}}>
                                  <Button size="small" href={contactLinks['resume']} variant="contained" color="secondary">Resume</Button>
                              </CardActions>
                          </Grid> */}
                      </Grid>
                </CardContent>
                
            </Card>
        </ThemeProvider>
    );
}