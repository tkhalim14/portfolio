import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfilePic from '../../Media/logo.jpg';
import { socialMediaIcons, socialMediaLinks } from '../../../app/contactMe';

import { UserLogo, ProjectSearchBar, DropdownMenu } from '.';

import { NavbarTitleStyle, TopNavToolbarStyles } from '../styles';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const downloadResume = () => () => window.location.href = socialMediaLinks['Resume']

const TopNav = ({handleDrawerToggle}) => {

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
          <Toolbar style={TopNavToolbarStyles} disableGutters>
            <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
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
            <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}, gap: 1 }}>
              <IconButton size="small" onClick={handleDrawerToggle}>
                <Menu color= "secondary"/>
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/portfolio"
                sx={NavbarTitleStyle}
              >
               T.K. Halim
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 , display:'flex', justifyContent: 'flex-end'}}>
              <div className='resumeButton' onClick={downloadResume()}>
                {socialMediaIcons['Resume']}
                Resume 
              </div>
              <ProjectSearchBar/>
              <div className="dropdown-menu">
                <DropdownMenu 
                  profilePic={ProfilePic} 
                  items={socialMediaIcons} 
                  links={socialMediaLinks} 
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

