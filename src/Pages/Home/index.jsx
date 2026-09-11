import React, { useState, useEffect } from 'react';

import { Grid, Box } from '@mui/material';
import './index.css';
import LoadingOverlay from '../../Components/LoadingScreen';
import ProfileCard from './components/profileInfo';
import ExperiencesCorner from './components/experiencesCorner';
import ProfilePictureComponent from './components/profilePic';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1, marginTop: '1vmax', padding: 4 }}>
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        order={{ xs: 2, md: 1 }}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <ProfileCard />
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        order={{ xs: 1, md: 2 }}
                        sx={{
                            justifyContent: { xs: 'flex-start', md: 'center' },
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <ProfilePictureComponent />
                    </Grid>
                </Grid>
                <ExperiencesCorner />
            </Box>
            <LoadingOverlay open={isLoading} />
        </>
    );
};

export default Home;
