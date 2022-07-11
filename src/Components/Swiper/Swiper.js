import Carousel from 'react-elastic-carousel'
import "./Swiper.css"


const Swiper = ({ slides }) => {

  return (
    <>
        <Carousel enableAutoPlay autoPlaySpeed={2500}
        breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2},
        { width: 1380, itemsToShow: 3 },
      ]}>
        {
          slides.map(slide =>
            <div key={slide.name}>
              <a href={slide.website} target="_blank" rel="noreferrer">
              <img src={slide.preview} alt={slide.name} />
              </a>
            </div>
          )
        }
      </Carousel>
    </>
  )
}

export default Swiper;
