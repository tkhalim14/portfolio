import Carousel from 'react-material-ui-carousel';
import React from 'react';

const CarouselComponent = ({index, updateIndex, items, Item, height='100%', width='100%'}) => {
    const [showNav, setShowNav] = React.useState(false);
    if(index===undefined){
      index=0;
      updateIndex = () => {}
    }
  
    return (
        <div style={{ height:height, width: width, marginBottom: '10rem'}} onMouseEnter={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)}>
          <Carousel
            sx={{zIndex:0}}
            animation={"slide"}
            fullHeightHover={false}
            navButtonsAlwaysVisible={showNav}
            next={() => updateIndex((items.length+index+1)%items.length)}
            prev={() => updateIndex((items.length+index-1)%items.length)}
          >
              {
                  items.map( (item, i) => <Item key={i} item={item} /> )
              }
          </Carousel>
        </div>
    );
}

export default CarouselComponent;