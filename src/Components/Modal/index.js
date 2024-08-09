import React from "react";
import { 
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const ModalComponent = ({
  open, 
  title,
  children, 
  sx,
  closeButton: CloseButton, 
  onClose,
  dialogActions,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={sx}
      maxWidth={'lg'}
    >
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={onClose}>
          {CloseButton? <CloseButton/>:<Close/>}
        </IconButton>
      </Box>
      <DialogContent>
        {children}
      </DialogContent>
      { dialogActions &&
        <DialogActions>
          {dialogActions}
        </DialogActions>
      }
    </Dialog>
  );
};

export default ModalComponent;