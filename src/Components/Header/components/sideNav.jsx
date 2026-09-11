import React from 'react';
import { SideNavStyle } from '../styles';
import { routes } from '../../../app/config/app.config';
import { Drawer } from './index';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

export default function SideNav({ drawerState, handleDrawerToggle, handleDrawerClose }) {
    return (
        <>
            <Box style={SideNavStyle}>
                <Box
                    style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        marginTop: '1rem',
                    }}
                >
                    <button
                        id={'Open SideNav'}
                        title={'Open SideNav'}
                        aria-label={'Open SideNav'}
                        onClick={handleDrawerToggle}
                        style={{ all: 'unset', color: 'inherit', cursor: 'pointer' }}
                    >
                        <MenuIcon sx={{ fontSize: '32px' }} color="secondary" />
                    </button>
                </Box>
            </Box>
            <Drawer open={drawerState} pages={routes} onClose={handleDrawerClose} />
        </>
    );
}
