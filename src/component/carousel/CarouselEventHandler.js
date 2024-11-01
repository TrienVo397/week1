import  { useEffect, useState } from "react";

const useCarouselEventHandlers = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]); // square brakets, can have more than one dependency
  const goToPrevious = ()=>{
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? images.length -1 : currentIndex-1;
    console.log(`goToPrevious: newIndex: ${newIndex}`)
    setCurrentIndex(newIndex);
  }
  const goToNext =()=>{
    const isLastSlide = currentIndex === images.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    console.log(`goToNext: newIndex: ${newIndex}`)
    setCurrentIndex(newIndex)
  }
  const goToSlide =(index)=>{
    console.log(`goToSlide: index: ${index}`)
    setCurrentIndex(index)
  }
  return { currentIndex, goToNext,goToPrevious, goToSlide }; // Returns an object: { currentIndex: 5 }
}


export default useCarouselEventHandlers;
