import { Box, Typography } from '@mui/material';
import { Card } from '.';
import { HomeCarouselExperiences } from '../../../app/profileHistory';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import colors from '../../../Components/Constants/colorScheme';

const handleNav = (id, direction) => {
    const element = document.getElementById(id);
    if (direction === 'left')
        element.scrollTo({
            left: element.scrollLeft - 490,
            behavior: 'smooth',
        });
    else
        element.scrollTo({
            left: element.scrollLeft + 490,
            behavior: 'smooth',
        });
};

const experiencesCorner = () => (
    <>
        <Box
            name="controls"
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1rem',
                marginBottom: '0.1rem',
            }}
        >
            <Typography color={colors[2]} flexGrow={1} variant="h4">
                Highlighted Experiences
            </Typography>
            <button
                onMouseDown={() => handleNav('star-experiences', 'left')}
                style={{ all: 'unset', cursor: 'pointer', color: colors[2] }}
            >
                <ArrowBackIos />
            </button>
            <button
                onMouseDown={() => handleNav('star-experiences', 'right')}
                style={{ all: 'unset', cursor: 'pointer', color: colors[2] }}
            >
                <ArrowForwardIos />
            </button>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 24,
                width: '100%',
                overflow: 'hidden',
            }}
            id="star-experiences"
        >
            {HomeCarouselExperiences.map((ele, index) => {
                return (
                    <Box key={'exp' + index} sx={{ width: '300px' }}>
                        <Card {...ele} />
                    </Box>
                );
            })}
        </Box>
    </>
);

export default experiencesCorner;
