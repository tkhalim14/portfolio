import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import CardContent from '@mui/material/CardContent';

import { GitHub } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

import { Typography } from '@mui/material';


import project from './projects.json';
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
      {project.sort(function(a,b){ return -a['priority']+b['priority']; }).map((element,index)=>{
        if(props.priority_bool===true && element['priority'] === 0)
          return ''
        return (
        <TimelineItem key={element['name']} sx={{ padding: 1}}>
          <TimelineSeparator>
            <TimelineDot sx={{backgroundColor: 'white'}}/>
            <TimelineConnector sx={{backgroundColor: colors[8]}}/>
          </TimelineSeparator>
          <TimelineContent sx={{paddingTop: 3, paddingLeft: 6, paddingRight: 4, paddingBottom: 2}}>
            <CardContent sx={{backgroundColor: "white", position: 'relative', left: -10, top: "50%", borderRadius: 10,width: 2, height: 5}}>
            </CardContent>
            <CardContent sx={{backgroundColor: "white", padding: 3, width: '85%'}}>
              <Typography variant="h5" id={'#'+(element['name'])} color={colors[9]}>
                {element['name']}
                <span style={{display:'in-line', color:'orange'}}>
                  &nbsp;&nbsp;&nbsp;
                { element['priority']===1 ? <StarIcon/>: "" }
                </span>
              </Typography>
              <Typography variant="body2" sx={{color: colors[2], fontWeight:200}}>
                Made with &nbsp;
                <span style={{color: colors[3], display:'inline-block'}}>
                  {element['techstack']}
                  <b style={{paddingLeft: 18, position:'relative', top: 4}}>
                    <Link to={element['link']}><GitHub fontSize='small'/></Link>
                  </b>
                </span>
              </Typography>
              <Typography sx={{ mb: 1.5,paddingTop: 0.5 }} variant="body1" color="text.secondary">
                <hr/>
              </Typography>
              <Typography variant="body2" sx={{color: colors[4],paddingTop:1}}>
                {element['description']}
              </Typography>
            </CardContent>
            {/* <Typography variant="h5" id={'#'+(element['name'])}>
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
            </Typography> */}
          </TimelineContent>
        </TimelineItem>
      )}
      )}
      </Timeline>
    </React.Fragment>
  );
}