import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import "./Swiper.css"


const Swiper = ({ slides }) => {
const [mobile,setMobile] = useState(true);
  useEffect(() => {

    window.innerWidth < 680 ? setMobile(true) : setMobile(false)

  },[mobile] );
   
  return (
    <>
    {mobile ? (
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={2000} >
        {
          slides.map((slide,idx) =>
            <div key={idx}>
              <img src={slide} alt={slide} />
            </div>
          )
        }
      </Carousel>
    )
  : (
    <Carousel itemsToShow={3} enableAutoPlay autoPlaySpeed={2000} >
    {
      slides.map((slide,idx) =>
        <div key={idx}>
          <img src={slide} alt={slide} />
        </div>
      )
    }
  </Carousel>
  )}
    </>
  )
}

export default Swiper;
