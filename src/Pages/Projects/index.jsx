import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';

import CardContent from '@mui/material/CardContent';

import { GitHub } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

import { Box, Button, CardActions, Tooltip, Typography } from '@mui/material';

import project from './utils/personalProjects';
import colors from '../../Components/Constants/colorScheme';
import { useMediaQuery, useTheme } from '@mui/material';

import { useLocation, Link } from 'react-router-dom';

import './index.css';
import ModalComponent from '../../Components/Modal/index';

const ProjectBanner = ({ src, view, setBannerWidth = '65%' }) => (
    <Box style={{ flexGrow: 1 }}>
        <img
            src={src}
            alt="banner.png"
            style={{
                width: view ? setBannerWidth : '0',
                backgroundColor: colors[2],
                opacity: view ? 1 : 0,
                transition: '0.5s all',
                padding: '0rem',
                borderRadius: '1rem',
            }}
        />
    </Box>
);

const ProjectPage = (props) => {
    const theme = useTheme();
    const largeView = useMediaQuery(theme.breakpoints.up('md'));
    const [modalBool, setModalBool] = React.useState(false);
    const [modalMetaData, setModalMetaData] = React.useState({});

    const handleModalContent = (title, src, description) => {
        setModalMetaData({
            title: title,
            src: src,
            description: description,
        });
    };

    const handleLearnMoreAction = (title, src, description) => {
        handleModalContent(title, src, description);
        setModalBool(true);
    };

    const [projectToggles, setProjectToggles] = React.useState(() => {
        let x = {};
        for (let i = 0; i < project.length; i++) {
            x[project[i]['name']] = 0;
        }
        return x;
    });

    const handleEnter = React.useCallback((name) => {
        setProjectToggles((prev) => {
            for (let x in prev) {
                prev[x] = 0;
            }
            return {
                ...prev,
                [name]: 1,
            };
        });
    }, []);

    const location = useLocation();

    function scrollToTargetAdjusted(element) {
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 120,
            behavior: 'smooth',
        });
    }

    React.useEffect(() => {
        const element = document.getElementById(location.state?.goto);
        if (element) {
            scrollToTargetAdjusted(element);
        }
    }, [location, handleEnter]);

    return (
        <React.Fragment>
            <ModalComponent
                title={modalMetaData.title}
                open={modalBool}
                onClose={() => setModalBool(false)}
            >
                <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flex: 3 }}>
                        <ProjectBanner
                            src={modalMetaData.src}
                            view={true}
                            setBannerWidth={'100%'}
                        />
                    </Box>
                    <Box sx={{ flex: 2 }}>{modalMetaData.description}</Box>
                </Box>
            </ModalComponent>
            <Timeline position={largeView ? 'alternate' : 'right'}>
                {project
                    .sort((a, b) => -a['priority'] + b['priority'])
                    .map((element, index) => {
                        if (props.priority_bool === true && element['priority'] === 0) return '';

                        return (
                            <TimelineItem key={'project' + index} sx={{ padding: 4 }}>
                                <TimelineOppositeContent
                                    color="text.secondary"
                                    style={{
                                        display: largeView ? 'block' : 'none',
                                        flexGrow: 1,
                                        height: '20vmax',
                                        zIndex: 0,
                                    }}
                                >
                                    <Box
                                        style={{
                                            display: 'flex',
                                            justifyContent:
                                                index % 2 === 0 || !largeView
                                                    ? 'flex-end'
                                                    : 'flex-start',
                                        }}
                                    >
                                        <ProjectBanner
                                            src={element['pic']}
                                            view={projectToggles[element['name']]}
                                        />
                                    </Box>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: colors[2] }} />
                                    <TimelineConnector sx={{ backgroundColor: colors[3] }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <CardContent
                                        sx={{
                                            backgroundColor: colors[5],
                                            padding: '2rem',
                                            borderRadius: '1rem',
                                            cursor: 'pointer',
                                        }}
                                        className="project-item"
                                        onMouseOver={() => {
                                            handleEnter(element['name']);
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            color={colors[2]}
                                            id={element['name']}
                                        >
                                            {element['name']}
                                            <span style={{ display: 'in-line', color: 'orange' }}>
                                                &nbsp;&nbsp;&nbsp;
                                                {element['priority'] === 1 ? <StarIcon /> : ''}
                                            </span>
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: colors[4], fontWeight: 200 }}
                                        >
                                            Made with &nbsp;
                                            <span
                                                style={{
                                                    color: colors[3],
                                                    display: 'inline-block',
                                                }}
                                            >
                                                {element['techstack']}
                                                <b
                                                    style={{
                                                        paddingLeft: 18,
                                                        position: 'relative',
                                                        top: 4,
                                                    }}
                                                >
                                                    <Link to={element['link']}>
                                                        <GitHub fontSize="small" />
                                                    </Link>
                                                </b>
                                            </span>
                                        </Typography>
                                        <Box
                                            style={{
                                                marginTop: '0.3rem',
                                                height: '0.05rem',
                                                backgroundColor: colors[4],
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: colors[4],
                                                marginTop: '0.5rem',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%',
                                                display: largeView ? 'block' : 'none',
                                            }}
                                        >
                                            {element['description']}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            justifyContent: 'flex-end',
                                            display: largeView ? 'none' : 'flex',
                                        }}
                                    >
                                        <Tooltip
                                            title={element['description']}
                                            placement="bottom-start"
                                        >
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    fontSize: '10px',
                                                    backgroundColor: colors[5],
                                                }}
                                                onClick={() =>
                                                    handleLearnMoreAction(
                                                        element['name'],
                                                        element['pic'],
                                                        element['description'],
                                                    )
                                                }
                                            >
                                                Learn more...
                                            </Button>
                                        </Tooltip>
                                    </CardActions>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
            </Timeline>
        </React.Fragment>
    );
};
export default ProjectPage;
