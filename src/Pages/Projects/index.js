import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import CardContent from '@mui/material/CardContent';

import { GitHub } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

import { Typography } from '@mui/material';


import project from './projects.js';
import colors from '../../Components/Constants/colorscheme.js';

import { useLocation, Link } from 'react-router-dom';

import './index.css';

export default function ProjectPage(props) {

  const [projectToggles, setProjectToggles] = React.useState(()=>{
    let x = {};
    for(let i=0; i<project.length;i++){
      x[project[i]['name']]=0;
    }
    return x;
  });

  const handleEnter = React.useCallback((name) => {
    setProjectToggles((prev) => {
      for (let x in prev){
        prev[x]=0;
      }
      return (
        {
          ...prev,
          [name]: 1,
        }
      );
    })
  },[]);

  const handleToggle = (name) => {
    console.log(name);
    console.log(projectToggles);
    setProjectToggles((prev) => {
      return (
        {
          ...prev,
          [name]: prev[name]===0?1:0,
        }
      );
    })
  }
  
  const location = useLocation();

  React.useEffect(()=>{
    // console.log(location);
    if(location.state){
      const element = document.getElementById(location.state.goto);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        handleEnter(location.state.goto);
        // if(element.classList.contains('pop-out-effect')){
        //   element.classList.remove('pop-out-effect');
        // }
        // element.classList.add('pop-out-effect');
        // element.addEventListener('animationend', () => {
        //   element.classList.remove('pop-out-effect');
        // })
      }
    }
  },[location, handleEnter]);

  return (
    <React.Fragment>
      <Timeline
        position='alternate'
      >
      {project.sort((a,b) => -a['priority']+b['priority']).map((element,index)=>{
        
        if(props.priority_bool===true && element['priority'] === 0)
          return ''
        return (
          <TimelineItem key={'project'+index} sx={{ padding: '1rem'}}>
            <TimelineOppositeContent color="text.secondary">
              {/* <div>10:00 am</div> */}
              <div style={{display: 'flex', justifyContent: index%2===0?'flex-end':'flex-start'}}>
                <img 
                  className="opp-content" 
                  src={element['pic']} 
                  alt="banner.png" 
                  style={{
                    width: projectToggles[element['name']]?'22rem':'0', 
                    backgroundColor: colors[2],
                    opacity: projectToggles[element['name']]
                  }}></img>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{backgroundColor: colors[2]}}/>
              <TimelineConnector sx={{backgroundColor: colors[3]}}/>
            </TimelineSeparator>
              <TimelineContent className='project-item'>
                <CardContent 
                  sx={{
                    backgroundColor: colors[5], 
                    padding: '2rem', 
                    borderRadius: '1rem', 
                    cursor: 'pointer'
                  }} 
                  onMouseEnter={() => handleEnter(element['name'])} 
                  onClick={()=>handleToggle(element['name'])}
                >
                  <div id={(element['name'])} style={{marginTop: '-8rem', position:'absolute' }}>
                  </div>
                  <Typography variant="h5" color={colors[2]}>
                    {element['name']}
                    <span style={{display:'in-line', color:'orange'}}>
                      &nbsp;&nbsp;&nbsp;
                    { element['priority']===1 ? <StarIcon/>: "" }
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{color: colors[4], fontWeight:200}}>
                    Made with &nbsp;
                    <span style={{color: colors[3], display:'inline-block'}}>
                      {element['techstack']}
                      <b style={{paddingLeft: 18, position:'relative', top: 4}}>
                        <Link to={element['link']}><GitHub fontSize='small'/></Link>
                      </b>
                    </span>
                  </Typography>
                  <div style={{marginTop: '0.3rem',height: '0.05rem', backgroundColor:colors[4]}}/>
                  <Typography variant="body2" sx={{color: colors[4], marginTop: '0.5rem'}}>
                    {element['description']}
                  </Typography>
                </CardContent>
              </TimelineContent>
          </TimelineItem>
        )}
      )}
      </Timeline>
    </React.Fragment>
  );
}