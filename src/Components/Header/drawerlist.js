
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import colors from '../Constants/colorscheme';

const DrawerListComponent = ({anchor, toggleDrawer, pages}) => {
    return (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((text, index) => (
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
}

export default DrawerListComponent;