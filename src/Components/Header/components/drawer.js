
import Box from '@mui/material/Box';
import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import colors from '../../Constants/colorScheme';
import { Link, useLocation } from 'react-router-dom';

const SidenavActivePageStyles = {
  backgroundColor: colors[2],
  color: colors[1],
}

const DrawerComponent = ({open, pages, onClose}) => {
  const location = useLocation();

  return (
    <Drawer
        anchor={'left'}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            minWidth: '250px',
            borderRight: '2px solid white',
            borderTop: '1px solid white',
            borderRadius: "0 32px 32px 0"
          },
        }}
    >
        <Box role="presentation">
            <List sx={{display: "flex", flexDirection: "column", gap: 2, mr: 1}}>
                {pages.map((page, index) => (
                  <Link to={page.route} key={page.route} style={{all: 'unset', flexGrow: 1}} onClick={onClose}>
                    <ListItem
                      key={index} 
                      disablePadding 
                      sx={(location.pathname===page.route)?{
                        ...SidenavActivePageStyles,
                        width: '250px', 
                        borderRadius: "0 32px 32px 0"
                      }:{
                        width: '250px', 
                        borderRadius: "0 32px 32px 0"
                      }}
                      >
                        <ListItemButton sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <ListItemText primary={page.name} sx={{ml: 1}}/>
                            <ChevronRightIcon sx={{color: colors[3]}}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                ))}
            </List>
        </Box>
    </Drawer>
  );
}

export default DrawerComponent;