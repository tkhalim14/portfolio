import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

import './index.css';
import ProfilePic from '../Media/logo.jpg';
import colors from '../Constants/colorscheme.js';
import contactLinks from '../Constants/contactme.js';

import { UserLogo, ProjectSearchBar, Drawer, DropdownMenu } from './extras.js';

const pages = ['Projects', 'Timeline', 'About'];
const profile_dropdown = [['Github',<GitHubIcon />], ['Gmail',<MailIcon/>], ['Instagram',<InstagramIcon/>],['Linkedin',<LinkedIn/>] ,['Resume',<DownloadIcon/>]];


// https://stackoverflow.com/questions/74239730/mui-autocomplete-does-not-fully-appear-in-appbar

function ResponsiveAppBar() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const NavbarTitleStyle = () => {
    return {
      mr: 2,
      display: 'flex',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.2rem',
      textDecoration: 'none',
      color: colors[2],
      justifyContent: 'center'
    };
  }

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
              <div className='resumeButton' onClick={()=> window.location.href=contactLinks['Resume']}>
                <DownloadIcon size="small"/>
                Resume 
              </div>
              <ProjectSearchBar/>
              <DropdownMenu profilePic={ProfilePic} items={profile_dropdown} links={contactLinks} anchorElUser={anchorElUser} handleOpenMenu={handleOpenUserMenu} handleCloseMenu={handleCloseUserMenu}/>
            </Box>
          </Toolbar>
      </AppBar>
      <div
        style={{
          position: 'fixed',
          top: 0,
          height:'100%',
          width: '4rem',
          backgroundColor: colors[1],
          borderRight: '0.1rem solid white',
          zIndex: 2,
        }}
      >
        <div style={{flex: 1, display:'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '0.5rem'}}>
          <button onClick={toggleDrawer('left', true)} style={{all: 'unset', color: 'inherit', cursor: 'pointer'}}>
            <MenuIcon sx={{ fontSize: 32 , padding: '0.4rem 0'}}/>
          </button>
        </div>
      </div>
      <Drawer anchor={'left'} state={state} toggleDrawer={toggleDrawer} pages={pages}/>
    </>
    
  );
}
export default ResponsiveAppBar;