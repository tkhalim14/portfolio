// LoadingOverlay.js
import React, { Suspense } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Lottie from "lottie-react";
import colors from '../Constants/colorscheme.js';
import './index.css';
import LoadingSVG from "../../Components/Media/loading.json"; 
import { CircularProgress } from '@mui/material';

const LoadingOverlay = ({ open }) => (
    <Backdrop open={open} style={{ background: colors[1], zIndex: 9999 }}>
        <Grid container justifyContent="space-evenly" padding="8vmax">
            <Grid item xs={12} md={6} className='fade-in' style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h5">Welcome to</Typography>
                </Box>
                <Box sx={{ display: 'flex' ,marginTop: '1.5vh'}}>
                    <Typography variant="h2" sx={{ fontFamily: 'Roboto',letterSpacing: '10px' }}>
                      Tabish Khalid's Portfolio .
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Suspense fallback={<CircularProgress/>}>
                  <Lottie animationData={LoadingSVG} loop={true} style={{minHeight: 250, minWidth: 250, width:'40vw'}}/>
                </Suspense>
            </Grid>
        </Grid>
    </Backdrop>
);

export default LoadingOverlay;
