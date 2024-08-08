import React from "react";
import { SideNavStyle } from "../styles";
import { routes } from '../../../app/config/app.config.js';
import { Drawer } from "./index.js";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";

export default function SideNav () {

  const [drawerState, setDrawerState] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerState((prevState)=>{
      return !prevState;
    });
  }
  const handleDrawerClose = () => setDrawerState(false);
  
  return (
    <>
      <Box style={SideNavStyle}>
        <Box style={{flex: 1, display:'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '0.5rem'}}>
          <button 
            id={"Open SideNav"} 
            title={"Open SideNav"} 
            aria-label={'Open SideNav'} 
            onClick={handleDrawerToggle} 
            style={{all: 'unset', color: 'inherit', cursor: 'pointer'}}
          >
            <MenuIcon sx={{ fontSize: 32 , padding: '0.4rem 0' }} color="secondary"/>
          </button>
        </Box>
      </Box>
      <Drawer open={drawerState} pages={routes} onClose={handleDrawerClose}/>
    </>
  );
};