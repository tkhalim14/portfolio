import * as React from 'react';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
} from '@mui/lab';
import { 
  OpenInNew,
  RadioButtonChecked
} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import colors from '../../../Components/Constants/colorScheme.js';

const DetailsTimeLineElement = ({dotColor, handleHover, handleLeave, title, date, location, link, description}) => {
  return (
      <TimelineItem>
          <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className='timeline-dot-target' color='primary' variant="outlined" sx={{ backgroundColor: dotColor }}>
              <RadioButtonChecked color="primary.dark"/>
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, color: "black" }} className='timeline-dot-trigger' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Typography variant="h6" component="span">
              {title} 
          </Typography>
          <Typography sx={{ color: colors[3] }}>
              {date}
          </Typography>
          <Typography sx={{ color: colors[10] }}>
              {location} 
              <span style={{  color: 'text.secondary', display:'inline-block', marginLeft:'1vw' }}>
                  {
                      link==="" ?
                      ("") :
                      (<a href={link} aria-label="View more"><OpenInNew fontSize='small'/></a>)
                  }
              </span>
          </Typography>
          <Typography variant="caption">
              {description}
          </Typography>
          </TimelineContent>
      </TimelineItem>
  );
}
export default DetailsTimeLineElement;