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


export {TypewriterEffect, Card};

