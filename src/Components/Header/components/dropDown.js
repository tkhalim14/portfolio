import {Menu, MenuItem, Tooltip, IconButton, Avatar} from '@mui/material';
import colors from '../../Constants/colorScheme';

const MenuProps = {
    MenuListProps: {
        'aria-labelledby': 'basic-button',
    },
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
    },
};

const DropdownMenuElemet = ({profilePic, items, links, anchorElUser, handleOpenMenu, handleCloseMenu}) => {
    return (
        <>
            <Tooltip title="Contact Me">
                <IconButton 
                    onClick={handleOpenMenu} 
                    sx={{ p: 0 }}
                    aria-haspopup="true"
                >
                    <Avatar alt="Remy Sharp" src={profilePic} style={{border: `0.2px solid ${colors[2]}`}}/>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorElUser}
                open={anchorElUser!==null}
                onClose={handleCloseMenu}
                disableScrollLock={true}
                sx={{
                  marginTop: 5.5, 
                  marginLeft:-0.9,
                  '& .MuiMenu-list': {
                    border: `1px solid ${colors[2]}`,
                    borderRadius: 2
                  }
                }}
                MenuListProps={MenuProps.MenuListProps}
                anchorOrigin={MenuProps.anchorOrigin}
                transformOrigin={MenuProps.transformOrigin}
            >
            {items.map(([setting,symbol]) => (
                <MenuItem key={setting} onClick={handleCloseMenu}>
                <Tooltip textalign="center" title={setting} placement="left-end">
                    <a href={links[setting]} style={{color: colors[2]}}>{symbol}</a>
                </Tooltip>
                </MenuItem>
            ))}
            </Menu>
        </>
    );
}

export default DropdownMenuElemet;