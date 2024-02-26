
import Box from '@mui/material/Box';
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import colors from '../Constants/colorscheme';

const DrawerComponent = ({anchor, state, toggleDrawer, pages}) => {
    return (
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer('left', false)}
            PaperProps={{
            sx: { width: "20%" },
            }}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {pages.map((text, index) => (
                    <ListItem key={index}>
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
        </Drawer>
    );
}

export default DrawerComponent;