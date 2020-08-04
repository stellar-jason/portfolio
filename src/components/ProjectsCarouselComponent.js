import React, {useState} from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";


const ProjectCarousel = ({carousel, projectIndex}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const next = () => {
    const nextIndex = activeIndex === carousel.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if (animating) return;
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? carousel.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    if (animating) return;
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = (carousel) => { 
    carousel.filter(item => {
    return item.index === projectIndex
  }).map(item => {
    return (
      <CarouselItem key={item.id}>
        <img src={item.img} alt={item.alt} width='100%' height='auto' />
      </CarouselItem>
    );
  })};

  return (
    <>
    {console.log(`index: ${carousel}`)}
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={carousel} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </>
  );
};

export default ProjectCarousel;