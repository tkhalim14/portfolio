import TypewriterComponent from './typeWriter';
import CardComponent from './card';

const TypewriterEffect = (props) => {
    return (
        <TypewriterComponent {...props}/>
    );
}

const Card = (props) => {
    return (
        <CardComponent {...props}/>
    );
}

const banners = [
  {
    url: process.env.PUBLIC_URL+"/images/Banner-1.png"
  },
  {
    url: process.env.PUBLIC_URL+"/images/autoreels-banner.png"
  },
  {
    url: process.env.PUBLIC_URL+"/images/musipy-banner.png"
  },
  {
    url: process.env.PUBLIC_URL+"/images/multi-tridos.png"
  }
];

const experiences = [
  {
    title: 'Teaching Assistant',
    subtitle: 'CS 203, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/TA.jpeg',
    description: 'Teaching Assistant for the Artificial Intelligence Lab course. Enabled students to learn the fundamentals of Artificial Intelligence. Guided in understanding complex concepts, evaluating assignments, and facilitating discussions to enhance learning.'
  },
  {
    title: 'Teaching Assistant',
    subtitle: 'CS103, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/TA.jpeg',
    description: 'Teaching Assistant for the Introduction to C Programming Course. Assessed and demonstrated 10 labs on basics of C & C++ programming including topics such as datatypes, operators, control statements, arrays, strings, pointers, functions, structures, file operations, classes, and objects.'
  },
  {
    title: 'SDE Intern',
    subtitle: 'Benam.me',
    image: process.env.PUBLIC_URL+'/images/Benam.jpeg',
    description: 'Led the development of an innovative automated video creation web-app engine, leveraging generative AI to produce human-like short video content based on user input parameters.'
  },
  {
    title: 'Public Relations',
    subtitle: 'Career Development Cell, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/PR.jpeg',
    description: 'As a Public Relations Coordinator at IIT Dharwad\'s Career Development Cell, I crafted narratives, managed social media, and organized events to enhance the institute\'s reputation. I fostered stakeholder relationships and supported professional growth.'
  },
  {
    title: 'Overall Coordinator',
    subtitle: 'PARSEC, IIT Dharwad',
    image: process.env.PUBLIC_URL+'/images/OC.jpeg',
    description: 'As the Overall Coordinator for PARSEC, the annual techfest of the Indian Institute of Technology, Dharwad, I led a cross-functional team in organizing a premier platform for budding technologists to showcase their technical prowess. My role involved problem-solving, event planning, and public relations, ensuring a seamless and impactful experience for participants and attendees alike.'
  }
];


export {TypewriterEffect, Card, banners, experiences};