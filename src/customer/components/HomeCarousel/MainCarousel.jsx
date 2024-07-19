import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const items = mainCarouselData.map((items)=>{
    return <img className="cursor-pointer" src={items.image} alt="" role='presentation'></img>
})

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);
export default MainCarousel;