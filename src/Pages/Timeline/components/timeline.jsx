import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { workExperiences, extraCurriculars, educationalDetails} from '../../../app/profileHistory';
import '../styles/index.css';
import { Box, Tab as MUITab, styled, Tabs, useMediaQuery, useTheme } from '@mui/material';
import DetailsTimeLineElement from './timelineElement';
import { RadioButtonChecked } from '@mui/icons-material';
import colors from '../../../Components/Constants/colorScheme';

const Tab = styled(MUITab)(() => ({
  fontSize: 20
}));

const handleHover = (event) => {
  const hoveredElement = event.currentTarget.parentNode.querySelector('.timeline-dot-target');

  if (hoveredElement) {
      hoveredElement.classList.add('hovered');
  }
};

const handleLeave = (event) => {
const hoveredElement = event.currentTarget.parentNode.querySelector('.timeline-dot-target');
if (hoveredElement) {
  hoveredElement.classList.remove('hovered');
}
};

export default function CareerTimeline() {
    const terminalColors=['#ff0000','#FFD700','#65a765'];
    const [tabIndex, setTabIndex] = React.useState(1);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
      setTabIndex(newValue);
    };

    function getTabData () {
      switch(tabIndex) {
        case 1: return workExperiences;
        case 2: return educationalDetails;
        case 3: return extraCurriculars;
        default: return null;
      }
    }

  return (
  <React.Fragment>
    <Box sx={{mb: 2, gap: 1, display: 'flex', transition: "0.5s all"}}>
      {
        terminalColors.map((color,index)=>{
          if(tabIndex-1===index)
            return (
              <Box key={`career-timeline-${index}`} sx={{marginTop: -1, border: `2px solid ${colors[2]}`, borderBottom: "none", borderRadius: "10px 10px 0 0", width: "min-width", display: "inline-flex", padding: "6px 4px"}}>
                <RadioButtonChecked sx={{color: color, mt: -0.5, cursor: 'pointer'}} onClick={(event) => handleChange(event, index+1)}/>
              </Box>
            );
          return (
            <RadioButtonChecked key={`career-timeline-${index}`} sx={{color: color, cursor: 'pointer'}} onClick={(event) => handleChange(event, index+1)}/>
          );
      })
      }
    </Box>
    <Box sx={{display: 'flex', flexDirection: { xs: "column", md: "row" }}}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant={"scrollable"}
          allowScrollButtonsMobile
          orientation={useMediaQuery(theme.breakpoints.up('md'))?'vertical':'horizontal'}
          sx={{
            overflow: "hidden",
            flex: 1,
            '& .MuiTabs-flexContainer': {
              gap: 2,
            },
            marginBottom: 4
          }}
        >
          <Tab value={1} label="Work Experience" sx={{fontSize: 20}}/>
          <Tab value={2} label="Education" />
          <Tab value={3} label="Achievements & Recognitions" />
        </Tabs>
        <Box sx={{flex: 3, height: '80vh', overflow: 'auto', margin: {xs: "0", md: "0 32px"}, background: "white", borderRadius: 4}}>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                      marginX: {xs: 2, md: 3},
                    },
                }}
                >
                {getTabData()?.slice(0).reverse().map((element, index)=>{
                    return (
                        <DetailsTimeLineElement
                            key={element.title+index} 
                            dotColor={terminalColors[(tabIndex-1)%3]} 
                            title={element.title}
                            date={element.date}
                            location={element.location}
                            link={element.link}
                            description={element.description}
                            handleLeave={handleLeave}
                            handleHover={handleHover}
                        />
                    );
                })}
            </Timeline>
        </Box>
      </Box>
  </React.Fragment>);
}

