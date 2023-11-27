// LoadingOverlay.js
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Lottie from "lottie-react";
// import LinearProgress from '@mui/material/LinearProgress';
// import CircularProgress from '@mui/material/CircularProgress';

import colors from '../Constants/colorscheme.js';
import './index.css';

const LoadingOverlay = ({ open }) => {

    const [svgData, setsvgData] = React.useState();

    React.useEffect(() => {
        import("../../Components/Media/loading.json")
        .then(setsvgData);
    },[]);
    
    return (
        <Backdrop open={open} style={{background: colors[1]}}>
            <Grid container justifyContent="space-evenly" padding="8vmax">
                {/* First Column */}
                <Grid item xs={12} md={6} className='fade-in' style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    {/* Your content for the first column */}
                    
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h5">Welcome to</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' ,marginTop: '1.5vh'}}>
                        <Typography variant="h2" sx={{ fontFamily: 'Roboto',letterSpacing: '10px' }}>Tabish Khalid's Portfolio .</Typography>
                    </Box>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} md={6}>
                    {/* Your content for the second column */}
                    <Lottie animationData={svgData} loop={true} style={{minHeight: 250, minWidth: 250, width:'40vw'}}/>
                </Grid>
            </Grid>
        </Backdrop>
    );
};

export default LoadingOverlay;
