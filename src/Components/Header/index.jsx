import * as React from 'react';
import './styles/index.css';
import SideNav from './components/sideNav';
import TopNav from './components/topNav';
import { Box } from '@mui/material';

const Header = () => {
    const [drawerState, setDrawerState] = React.useState(false);
    const handleDrawerToggle = () => {
        setDrawerState((prevState) => {
            return !prevState;
        });
    };
    const handleDrawerClose = () => setDrawerState(false);

    return (
        <React.Fragment>
            <TopNav handleDrawerToggle={handleDrawerToggle} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <SideNav
                    drawerState={drawerState}
                    handleDrawerToggle={handleDrawerToggle}
                    handleDrawerClose={handleDrawerClose}
                />
            </Box>
        </React.Fragment>
    );
};
export default Header;
