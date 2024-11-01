import getImagePaths from './CarouselApiCall';
import useCarouselEventHandlers from './CarouselEventHandler.js';
import CarouselBody from './carousel_body/CarouselBody.jsx';
import { BACK, CarouselButton, NEXT } from './carousel_button/CarouselButton.jsx';


const images = getImagePaths();
const Carousel = () => {
  const {currentIndex, goToPrevious, goToNext} // must be the same names with the CarouselEventHandler props
  = useCarouselEventHandlers(images)
  return (
    <div className="relative w-1/2 mx-auto h-[400px]">
      <CarouselBody imageUrl={images[currentIndex]}></CarouselBody>
      <CarouselButton direction={BACK} onClickButtonAction={goToPrevious}/>
      <CarouselButton direction={NEXT} onClickButtonAction={goToNext}/>
    </div>
  );
};
export default Carousel;