import { Suspense } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import colors from '../Constants/colorScheme';
import './index.css';
import { CircularProgress } from '@mui/material';
import LoadingAnimation from '/Media/LoadingAnimation.svg';

const LoadingOverlay = ({ open }) => (
    <Backdrop open={open} sx={{ background: colors[2], zIndex: 9999 }}>
        <Grid container justifyContent="space-evenly" padding="8vmax">
            <Grid
                size={{ xs: 12, md: 6 }}
                className="fade-in"
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
                <Box>
                    <Typography variant="h5">Welcome to</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '1.5vh' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Roboto', letterSpacing: '10px' }}>
                        Tabish Khalid&apos;s Portfolio .
                    </Typography>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Suspense fallback={<CircularProgress />}>
                    <img src={LoadingAnimation} alt="LoadingAnimation" />
                </Suspense>
            </Grid>
        </Grid>
    </Backdrop>
);

export default LoadingOverlay;
