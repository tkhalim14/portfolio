
import Box from '@mui/material/Box';
import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import colors from '../Constants/colorscheme';
import { Link } from 'react-router-dom';

const DrawerComponent = ({anchor, state, toggleDrawer, pages}) => {
    return (
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer('left', false)}
            PaperProps={{
            sx: {minWidth: '200px'},
            }}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {pages.map((page, index) => (
                    <ListItem key={index}>
                        <Link to={page.route} style={{all: 'unset', flexGrow: 1}}>
                            <ListItemButton sx={{display: 'flex', justifyContent: 'space-between',}}>
                                <ListItemText primary={page.name} />
                                <ChevronRightIcon sx={{color: colors[3]}}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default DrawerComponent;