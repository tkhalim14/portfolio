import * as React from "react";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, LinkedIn, Download } from "@mui/icons-material";
import Button from '@mui/material/Button';

import { Box } from "@mui/material";

import contactLinks from '../../Components/Constants/contactme.js';

export default function Footer() {

  const contactsData = [['github',<GitHub/>],['facebook',<Facebook/>],['instagram',<Instagram/>],['linkedin',<LinkedIn/>]];


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      {/* <Container maxWidth="lg"> */}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Just your average passionate software developer. Always looking out for the best tech.
            </Typography>
            <br/>
            <Typography variant="body2">
              <Button href={contactLinks['resume']} sx={{color:'secondary.main'}}>Download Resume&nbsp; <Download/></Button>
            </Typography>
            <Typography variant="body2">
              <Button href="/portfolio#About" sx={{color:'secondary.main'}}>Go to About Section</Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A/14, Alinagar Colony, Anisabad, Patna
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: <a href="mailto:tkhalim14@gmail.com">tkhalim14@gmail.com</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 8789594839
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <div>
              {contactsData.map(([element,elementIcon])=> (
                    <a key={element} className="nav-link" href={contactLinks[element]} style={{padding:3, color:'primary.main'}}>
                      {elementIcon}
                    </a>
                ))}
            </div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <a color="inherit" href="https://your-website.com/" key={'https://your-website.com/'}>
              Tabish Portfolio
            </a>{" " + new Date().getFullYear()+"."}
          </Typography>
        </Box>
      {/* </Container> */}
    </Box>
  );
}