// import Carousel from 'react-material-ui-carousel';
import React from 'react';

const CarouselComponent = ({index, updateIndex, items, renderItems: Items, height='auto', width='100%', marginBottom="10rem"}) => {
    const [showNav, setShowNav] = React.useState(false);
    if(index===undefined){
      index=0;
      updateIndex = () => {}
    }
    return (
        <div style={{ width: width, height: '100%', marginBottom: marginBottom}} onMouseEnter={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)}>
          {/* <Carousel
            sx={{ zIndex:0, height: height, width: width }}
            animation={"slide"}
            fullHeightHover={false}
            navButtonsAlwaysVisible={showNav}
            next={() => updateIndex((index+1)%items.length)}
            prev={() => updateIndex((items.length+index-1)%items.length)}
          >
              {
                items.map((item, i) => 
                    <Items key={i} item={item} /> 
                )
              }
          </Carousel> */}
        </div>
    );
}

export default CarouselComponent;

