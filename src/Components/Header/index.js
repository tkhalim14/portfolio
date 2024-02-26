import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

import './index.css';
import ProfilePic from '../Media/logo.jpg';
import colors from '../Constants/colorscheme.js';
import contactLinks from '../Constants/contactme.js';

import { UserLogo, ProjectSearchBar, DrawerList } from './extras.js';

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
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                  color: colors[2],
                  justifyContent: 'center'
                }}
              >
               Tabish Khalid Halim
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 , display:'flex', justifyContent: 'flex-end'}}>
                <div className='resumeButton' onClick={()=> window.location.href=contactLinks['resume']}>
                  <DownloadIcon size="small"/>
                  Resume 
                </div>
              <ProjectSearchBar/>
              <Tooltip title="Contact Me">
                <IconButton 
                  onClick={handleOpenUserMenu} 
                  sx={{ p: 0 }}
                  aria-haspopup="true"
                >
                  <Avatar alt="Remy Sharp" src={ProfilePic} style={{border: `0.2px solid ${colors[2]}`}}/>
                </IconButton>
              </Tooltip>
              <Menu
                disableScrollLock={true}
                sx={{marginTop: 5,marginLeft:-0.9}}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {profile_dropdown.map(([setting,symbol]) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Tooltip textalign="center" title={setting} placement="left-end">
                      <a href={contactLinks[setting]} style={{color: colors[2]}}>{symbol}</a>
                    </Tooltip>
                  </MenuItem>
                ))}
              </Menu>
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
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        PaperProps={{
          sx: { width: "20%" },
        }}
      >
        <DrawerList anchor='left' toggleDrawer={toggleDrawer} pages={pages}/>
      </Drawer>
    </>
    
  );
}
export default ResponsiveAppBar;