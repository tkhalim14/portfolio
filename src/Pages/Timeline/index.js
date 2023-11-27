import * as React from 'react';
import {Link} from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import colors from '../../Components/Constants/colorscheme.js';
import {exp_elements,curricular_elements,education_elements} from './elements.js';
import './index.css';


export default function CustomizedTimeline() {

    const [c_1, setc_1] = React.useState(3);

    function LoadMore(){
        setc_1(curricular_elements.length);
        // console.log(curricular_elements.length);
        console.log('Loading more...');
    }

    const terminal_colors=['#ff0000','#FFD700','#65a765'];

    const theme = createTheme({
        palette: {
            primary: {
                main: colors[2],
                dark: 'black',
            },
            secondary: {
                main: '#d32f2f',
            },
            text: {
                primary: colors[3],
                secondary: '#FFF',
            },
          },
    });


  return (<React.Fragment>
    <ThemeProvider theme={theme}>
        <Typography variant="h4" marginX="50px" marginY="25px">
        <KeyboardArrowRightIcon/> Work Experience
        </Typography>
        <Timeline
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            marginX: 5,
            },
        }}
        >

        {exp_elements.slice(0).reverse().map((element)=>{

            let timelinedot_color = terminal_colors[element.id%3];

            return (<TimelineItem key={element.title}>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary' variant="outlined" sx={{ backgroundColor: timelinedot_color }}>
                    <RadioButtonCheckedIcon color="primary.dark"/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {element.title} 
                </Typography>
                <Typography sx={{ color: 'secondary.main' }} >
                    {element.date}
                </Typography>
                <Typography sx={{ color: 'primary.main' }}>
                    {element.location} 
                    <span style={{  color: 'primary.main', display:'inline-block', marginLeft:'1vw' }}>
                        {
                            element.link==="" ?
                            ("") :
                            (<a href={element.link}><OpenInNewIcon fontSize='small'/></a>)
                        }
                    </span>
                </Typography>
                <Typography variant="caption">
                    {element.description}
                </Typography>
                </TimelineContent>
            </TimelineItem>);
        })}
        </Timeline>
        
        <Typography variant="h4" marginX="50px" marginY="25px">
            <KeyboardArrowRightIcon/> Education
        </Typography>
        <Timeline
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            marginX: 5,
            },
        }}
        >

        {education_elements.slice(0).reverse().map((element)=>{

            let timelinedot_color = terminal_colors[element.id%3];

            return (<TimelineItem key={element.title}>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary' variant="outlined" sx={{ backgroundColor: timelinedot_color }}>
                    <RadioButtonCheckedIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {element.title}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }}>
                    {element.date}
                </Typography>
                <Typography sx={{ color: 'primary.main' }}>
                    {element.location} 
                    <span style={{  color: 'primary.main', display:'inline-block', marginLeft:'1vw' }}>
                        {
                            element.link==="" ?
                            ("") :
                            (<Link key={element.link} to={element.link}><OpenInNewIcon fontSize='small'/></Link>)
                        }
                    </span>
                </Typography>
                <Typography variant="caption">
                    {element.description}
                </Typography>
                </TimelineContent>
            </TimelineItem>);
        })}
        </Timeline>

        <Typography variant="h4" marginX="50px" marginY="25px">
            <KeyboardArrowRightIcon/> Achievements & Recognitions
        </Typography>
        <Timeline
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            marginX: 5,
            },
        }}
        >

        {curricular_elements.slice(0,c_1).reverse().map((element)=>{

            let timelinedot_color = terminal_colors[element.id%3];

            return (<TimelineItem key={element.title}>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary' variant="outlined" sx={{ backgroundColor: timelinedot_color }}>
                    <RadioButtonCheckedIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {element.title}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }}>
                    {element.date}
                </Typography>
                <Typography sx={{ color: 'primary.main' }}>
                    {element.location} 
                    <span sx={{  color: 'primary.main', display:'inline-block', marginLeft:'1vw' }}>
                        {
                            element.link==="" ?
                            ("") :
                            (<Link key={element.link} to={element.link}><OpenInNewIcon fontSize='small'/></Link>)
                        }
                    </span>
                </Typography>
                <Typography variant="caption">
                    {element.description}
                </Typography>
                </TimelineContent>
            </TimelineItem>);
        })}
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div>
            { c_1===curricular_elements.length ? "" : <Button variant="contained" onClick={LoadMore} style={{marginTop: '2vmax'}}>Load More...</Button>}
            </div>
        </div>
        </Timeline>
    </ThemeProvider>
  </React.Fragment>
    
    
  );
}