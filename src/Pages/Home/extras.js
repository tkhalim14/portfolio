import TypewriterComponent from './typewriter';
import CardComponent from './card';
import CarouselComponent from '../../Components/Carousel/index';

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

const Carousel = (props) => {
    return (
        <CarouselComponent {...props}/>
    );
}

export {TypewriterEffect, Card, Carousel};