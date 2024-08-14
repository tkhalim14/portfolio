import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, LinkedIn, Download } from "@mui/icons-material";
import Button from '@mui/material/Button';

import { Box } from "@mui/material";

import { socialMediaLinks } from '../../app/contactMe';

import colors from '../Constants/colorScheme.js';

const socialMediaIcons = [
    ['Github',<GitHub/>],
    ['Facebook',<Facebook/>],
    ['Instagram',<Instagram/>],
    ['Linkedin',<LinkedIn/>]
];

const FooterSection = ({title, subtitle, body1, body2}) => (
    <>
      <Typography variant="h5" color="text.primary" gutterBottom component={"div"}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" component={"div"}>
        {subtitle}
      </Typography>
      <Typography variant="body2" color="text.secondary" component={"div"}>
        {body1 && body1}
      </Typography>
      <Typography variant="body2" color="text.secondary" component={"div"}>
        {body2 && body2}
      </Typography>
    </>
);

const Footer = () => (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        p: {xs: 0, md: 6},
      }}
    >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <FooterSection
              title={"About Me"}
              subtitle={"Just your average passionate software developer. Always looking out for the best tech."}
              body1={
                <>
                  <br/>
                  <Button href={socialMediaLinks['resume']} sx={{color:'secondary.main'}}>Download Resume&nbsp; <Download/></Button>
                </>
              }
              body2={<Button href="/portfolio#About" sx={{color:'secondary.main'}}>Go to About Section</Button>}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterSection
              title={"Contact Me"}
              subtitle={"A/14, Alinagar Colony, Anisabad, Patna, Bihar"}
              body1={<>Email: <a href="mailto:tkhalim14@gmail.com" style={{color:colors[10]}}>tkhalim14@gmail.com</a> </>}
              body2={"Phone: +91 8789594839"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterSection
              title={"Follow Me"}
              body1={
                <div>
                  {socialMediaIcons.map(([element,elementIcon])=> (
                    <a key={element} aria-label={element} className="nav-link" href={socialMediaLinks[element]} style={{padding:3, color:colors[2]}}>
                      {elementIcon}
                    </a>
                  ))}
                </div>
              }
            />
          </Grid>
        </Grid>
    </Box>
);

export default Footer;