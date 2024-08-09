import * as React from 'react';
import { LocationOn } from '@mui/icons-material';
import colors from '../../../Components/Constants/colorScheme.js';
import { TypewriterEffect } from './index.js';
import { 
  Grid,
  Card,
  Tooltip,
  CardContent,
  Typography
} from '@mui/material';

const Fields =  ['Artificial Intelligence', 'Application Development', 'Competitive Programming', 'UI/UX Design', 'Open Source Work']
 
const ProfileCard = () => (
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
                        <Tooltip 
                          placement='left-start'
                          title={
                            <iframe 
                              title="IIT Dharwad" 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30757.25973446724!2d74.90965591427177!3d15.502846146221314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf32db0fffffff%3A0x41e1ca5b252a94d!2sIndian%20Institute%20of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1723130139271!5m2!1sen!2sin" 
                              width={'400'} 
                              height={'200'} 
                              style={{border: 0, borderRadius: 4}} 
                              loading="lazy" 
                              referrerpolicy="no-referrer-when-downgrade"
                            />
                          }
                          componentsProps={{
                            tooltip: {
                              sx: {
                                bgcolor: 'transparent',
                              },
                            },
                          }}
                        >
                        <LocationOn fontSize="small" sx={{color: "#ea4335", ml: 1}}/>
                        </Tooltip>
                        
                    </div>
                </div>
                <span style={{margin: '0 1rem'}}>
                    <TypewriterEffect fields={Fields} highlightColor={colors[4]}/>
                    <br/>
                </span>
                <Typography>
                    I am characterized by my passion and dedication towards coding, consistently striving to enhance my skills and delve into novel realms. My commitment to self-improvement and exploration remains steadfast.
                    <br/><br/>
                </Typography>
                <Grid container spacing={5}>
                    <Grid item>
                        Thanks for visiting my portfolio. Explore my projects and experiences, and let's connect!
                    </Grid>
                </Grid>
        </CardContent>
    </Card>
);

export default ProfileCard;