import React from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Clear } from '@mui/icons-material';
import colors from '../Constants/colorScheme';

const ModalComponent = ({
    open,
    title,
    children,
    sx,
    closeButton: CloseButton,
    onClose,
    dialogActions,
    isCustom = false,
}) => {
    if (isCustom)
        return (
            <Dialog open={open} onClose={onClose} maxWidth={'lg'} keepMounted>
                {children}
            </Dialog>
        );
    return (
        <Dialog
            fullWidth
            open={open}
            onClose={onClose}
            sx={{
                ...sx,
                '& .MuiDialog-paper': {
                    border: `1px solid ${colors[2]}`,
                },
            }}
            maxWidth={'lg'}
            keepMounted
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <DialogTitle>{title}</DialogTitle>
                <IconButton onClick={onClose} color="secondary" sx={{ padding: 2.5 }}>
                    {CloseButton ? <CloseButton /> : <Clear />}
                </IconButton>
            </Box>
            <DialogContent>{children}</DialogContent>
            {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
        </Dialog>
    );
};

export default ModalComponent;
