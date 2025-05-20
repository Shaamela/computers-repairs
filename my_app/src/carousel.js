
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react'
// import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

function Carousel() {
  const responsive = {
    2000: {
      items: 7,
    },
    1200: {
      items: 5,
    },
    500: {
      items: 3,
    },
    400: {
      items: 2,
    },

    300:{
      items:1,

      
    }
  };
  return (
    <div className='App'>
        <AliceCarousel  autoPlay infinite responsive={responsive} autoPlayInterval="3000">
            <img src= '/screen.jpeg' height="200px"  alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
            <img src= '/screen.jpeg' height="200px" alt="computer-engineer" className="sliderimg"/>
        </AliceCarousel>



        
    </div>
  )
}

export default Carousel;
