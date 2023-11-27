import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';



import MenuItem from '@mui/material/MenuItem';
import ApiIcon from '@mui/icons-material/Api';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

import ProfilePic from '../Media/logo.jpg';

import colors from '../Constants/colorscheme.js';
import contactLinks from '../Constants/contactme.js';

import searchData from "../../Pages/Projects/projects.json";

import { Link  } from "react-router-dom";

const pages = ['Projects', 'Timeline', 'About'];
const profile_dropdown = [['github',<GitHubIcon />], ['gmail',<MailIcon/>], ['instagram',<InstagramIcon/>],['linkedin',<LinkedIn/>] ,['resume',<DownloadIcon/>]];


// https://stackoverflow.com/questions/74239730/mui-autocomplete-does-not-fully-appear-in-appbar

function ResponsiveAppBar() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List >
        {['Projects', 'Timeline', 'About'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton href={'/portfolio#'+text}>
            <ListItemText primary={text} />
            <ListItemIcon>
              <ChevronRightIcon sx={{color: colors[3]}}/>
            </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const [view, setview] = React.useState(false);


  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    transition: '0.5s linear ease-in-out',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      
      width: '100%',
    },
  }));

  const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    color: 'inherit',
    '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width:'100%',
      // [theme.breakpoints.up('sm')]: {
      //   width: '16ch',
      //   '&:focus': {
      //     width: '24ch',
      //   },
      // },
    },
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  background: "rgba(255, 255, 255, 0.15)",
  borderRadius: "4px",
  width: "100%",
  "& input": {
    color: "#fff !important"
  },
  "& fieldset": {
    borderWidth: "0px",
    "& fieldset:hover, & fieldset:focus, & fieldset:active": {
      borderWidth: "0px"
    },
  }
}));

  const customDarkTheme  = (mode) => ({
    palette: {
      mode,
      primary: {
        ...colors[1],
        ...(mode === 'dark' && {
          main: colors[1],
        }),
        ...(mode === 'light' && {
          main: colors[1],
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: colors[1],
          paper: colors[1],
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: colors[1],
          paper: colors[1],
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: colors[3],
              secondary: colors[3],
            }
          : {
              primary: colors[3],
              secondary: colors[3],
            }),
      },
    },
  });

  const customTheme = createTheme(customDarkTheme('light'));

  // console.log(searchData.map((element)=> element['name']));

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <ApiIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/portfolio#/"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: colors[2],
            }}
          >
            Tabish Khalid Halim
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <div>
              <Button onClick={toggleDrawer('left', true)} sx={{color: 'inherit'}}><MenuIcon /></Button>
              <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>
            </div>
          </Box>
          <ApiIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/portfolio#/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: colors[2],
            }}
          >
            Tabish K. Halim
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, display: 'block', color: colors[3] }}
                href={'/portfolio#'+page}
              >
                {/* <a href={'/portfolio#'+page}>{page}</a> */}
                {page}
              </Button>
            ))}
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledAutocomplete
              options={searchData.map((element)=> {return element['name']})}
              freeSolo
              renderOption={(props, option) => {
                return (
                  <StyledLink {...props} style={{ backgroundColor: colors[1]}} to={`/Projects`} state={{ goto: `#${option}`}}>
                      {option}
                  </StyledLink>
                );
              }}
              renderInput={(params) => {
                const {InputLabelProps,InputProps,...rest} = params;
                return <StyledInputBase {...params.InputProps} {...rest} placeholder="Search projects…" />
              }}
            />
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Contact Me">
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={{ p: 0 }}
                aria-controls={anchorElUser ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElUser ? 'true' : undefined}
                >
                <Avatar alt="Remy Sharp" src={ProfilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              disableScrollLock={true}
              sx={{marginTop: 5,marginLeft:-0.9}}
              anchorEl={anchorElUser}
              // anchorOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right',
              // }}
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
                    <a href={contactLinks[setting]}>{symbol}</a>
                  </Tooltip>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    
  );
}
export default ResponsiveAppBar;