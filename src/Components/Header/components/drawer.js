
import Box from '@mui/material/Box';
import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import colors from '../../Constants/colorscheme';
import { Link } from 'react-router-dom';

const DrawerComponent = ({open, pages, onClose}) => {
    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
            PaperProps={{
            sx: {minWidth: '200px'},
            }}
        >
            <Box
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <List>
                    {pages.map((page, index) => (
                    <ListItem key={index}>
                        <Link to={page.route} style={{all: 'unset', flexGrow: 1}}>
                            <ListItemButton sx={{display: 'flex', justifyContent: 'space-between'}}>
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