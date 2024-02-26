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
import LocationOnIcon from '@mui/icons-material/LocationOn';

import colors from '../../Components/Constants/colorscheme.js';
import contactLinks from '../../Components/Constants/contactme.js';


export default function BasicCard() {


    const Fields =  ['Artificial Intelligence', 'Application Development', 'Competitive Programming', 'UI/UX Design', 'Open Source Work']
    const Topics = () => {
    return (
            <div style={{color: colors[4]}}>
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
            </div>
              
      )
  }

    return (
        <Card sx={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <CardContent>
                    <Typography variant="h2">
                        <Grid rows={{ xs: 2}} columns={{ xs: 1 }}>
                            <Grid item style={{marginLeft: '10rem'}}>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <rect width={24} height={24} fill="url(#pattern0)" />
                                <defs>
                                <pattern
                                    id="pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width={1}
                                    height={1}
                                >
                                    <use xlinkHref="#image0_4_317" transform="scale(0.0416667)" />
                                </pattern>
                                <image
                                    id="image0_4_317"
                                    width={24}
                                    height={24}
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADE0lEQVR4nJWWTUxTQRDH54EXSYQnMUYUPJmIoQkH+dASL1RUDEagRrwIEgMcED+iJKgnQbygUSQcVbgYMFKaSETDh9HEqoieWqnRkyioEVOKCd7q/LeZ18/X1l/y2t3p7v53Znb2VSOiAD9JOVhpI3ttlW9h8Yfe0lTPltRIWcDpGKSlpd++O3fv62hH43r1lqy7i7kVicbPfwl4vZ/19gutbAlx+uxlGhoepbqj1dTXe40tIQyBrKxMHnCYdzJLbvccWyK52nmRcnI2+tLT1+gIl4CFIQASCrQ011PXlQ5aXvZTUek+9R0Odp2/fZuvsNCib83bwhaiL/PfyFZhV2PjLQ4MgTJrCY2ODBBwu71UXlHLrRAicKhqv85dtWjNkUYeO0fNTceVh/EwBIDFsoMG7/VRXu7mCNcBdpeRsdYQwG8Yc/tWNx2rq2FLfCIEAHLhZE8KCvKp50Y/9VzvZ2soyRCQxbs6OyjZkY0RELBjxBULYcGfix/o0dhT34hjTH88PkWVB2zK22SYCgDsGmcbyURiIXCy6ZyembmO3s1MKG+jwViP5yO5PXNqrsYTA7kcc+Bf+aOSJiAn0xMj3AoiAli4zFqswih4PF6e61UCAsZpn7yvA2ikgghw0xSIQgwgxNqzSUcARuDicgcvXTP8SSosVj6+OFVABNCHd1b2wsJz8ZhtMmEOIDDFIZLJIoA+7Pg9GaYCWGT04QDvNOgdEAFucg5ChZkIUwFMxiKIZxsfU9TG8xcuX3b2er2hsY38/hVqP9+qKjwRcQWkOocfOKntzCW2BI/s6urfX7byPRtwTVTbTyhxGWtGjIBMCK9iAIG0NO37rtKiTdxVd1EqIhECMnD8yTQ1NJ5iSwgIiAfcVUCkfG8tzX9dUG+83pvdKnfhGAJyXSO2O0sq1ORwICB3EXcNUFzV9gY1D4tHHwwlgOM2y6UPokMjiACSjOSHI/cViL6jDIHpSQc3SbkcXu6CCLyZea/Hu/shMjTsVO+FGA/4UUWzzG5Gh0YQAbOXvhkaP0ogGUgi/rbEe+kn4h8OmajoHVLruQAAAABJRU5ErkJggg=="
                                />
                                </defs>
                            </svg>
                            </Grid>
                            <Grid item style={{letterSpacing: '1rem', fontWeight: 800, fontFamily: 'Unispace'}}>
                                Tabish Khalid<br/> Halim
                            </Grid>
                        </Grid>
                    </Typography>
                    <div style={{ fontSize: 14, letterSpacing: 0.5}} color="text.secondary" >
                        B.Tech, CSE'24
                        &nbsp;&nbsp;
                        <div style={{display: 'flex', justifyContent: 'flex-start', color: colors[3]}}>
                            <a href="https://www.iitdh.ac.in" style={{color: colors[3]}}>IIT Dharwad</a>
                            <LocationOnIcon fontSize="small"/>
                        </div>
                    </div>
                    <span style={{margin: '0 1rem'}}>
                        <Topics />
                        <br/>
                    </span>
                    <Typography>
                    I am characterized by my passion and dedication towards coding, consistently striving to enhance my skills and delve into novel realms. My commitment to self-improvement and exploration remains steadfast.
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
    );
}