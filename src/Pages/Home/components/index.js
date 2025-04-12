import TypewriterComponent from './typeWriter';
import CardComponent from './card';
import { extraCurriculars, workExperiences } from '../../Timeline/components/profileHistory';

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

const HomeCarouselExperiences = [
  ...extraCurriculars.filter((ele) => ele.isVisibleOnHomePage),
  ...workExperiences.filter((ele) => ele.isVisibleOnHomePage)
];

export {TypewriterEffect, Card, banners, HomeCarouselExperiences};