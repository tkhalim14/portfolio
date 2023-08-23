import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { GitHub } from '@mui/icons-material';

import project from './projects.json';
import { Typography } from '@mui/material';

import colors from '../../Components/Constants/colorscheme.js';

import { useLocation, Link } from 'react-router-dom';

export default function ProjectPage(props) {
  const location = useLocation();

  React.useEffect(()=>{
    // console.log(location);
    if(location.state){
      const element = document.getElementById(location.state.goto);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  return (
    <React.Fragment>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          marginX: 5,
          },
      }}
      >
      {project.map((element,index)=>{
        if(props.priority_bool===true && element['priority'] === 0)
          return ''
        return (
        <TimelineItem key={element['name']}>
          <TimelineSeparator>
            <TimelineDot />
            {index=== project.length-1? '': <TimelineConnector/>}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" id={'#section-'+(index)}>
              {element['name']}
            </Typography>
            <Typography variant="body2" sx={{color: colors[2], fontWeight:200}}>
              Made with &nbsp;
              <span style={{color: colors[3], display:'inline-block'}}>
                {element['techstack']}<b style={{paddingLeft:18}}><Link to={element['link']}><GitHub fontSize='small'/></Link></b>
              </span>
            </Typography>
            
            <Typography variant="body2" sx={{color: colors[8],paddingTop:1}}>
              {element['description']}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      )}
      )}
      </Timeline>
    </React.Fragment>
  );
}