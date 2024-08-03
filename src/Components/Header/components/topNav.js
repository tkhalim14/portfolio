import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import ProfilePic from '../../Media/logo.jpg';
import contactLinks from '../../Constants/contactme.js';

import { UserLogo, ProjectSearchBar, DropdownMenu } from '.';

import { NavbarTitleStyle } from '../styles';

const profileDropdown = [
  ['Github', <GitHubIcon/>], 
  ['Gmail', <MailIcon/>], 
  ['Instagram', <InstagramIcon/>], 
  ['Linkedin', <LinkedIn/>], 
  ['Resume', <DownloadIcon/>]
];

const downloadResume = () => () => window.location.href = contactLinks['Resume']

const TopNav = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed" style={{ borderBottom: '0.1rem solid white' , zIndex: 1}}>
          <Toolbar style={{margin: '0 2rem 0 5rem'}} disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <UserLogo/>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/portfolio"
                sx={NavbarTitleStyle}
              >
               Tabish Khalid Halim
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 , display:'flex', justifyContent: 'flex-end'}}>
              <div className='resumeButton' onClick={downloadResume()}>
                <DownloadIcon size="small"/>
                Resume 
              </div>
              <ProjectSearchBar/>
              <div className="dropdown-menu">
                <DropdownMenu 
                  profilePic={ProfilePic} 
                  items={profileDropdown} 
                  links={contactLinks} 
                  anchorElUser={anchorElUser} 
                  handleOpenMenu={handleOpenUserMenu} 
                  handleCloseMenu={handleCloseUserMenu}
                />
              </div>
            </Box>
          </Toolbar>
      </AppBar>
    </>
  );
}
export default TopNav;