import { useState } from 'react';
import { faker } from '@faker-js/faker';

// import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Slider() {
  const slides = [
    faker.image.business(),
    faker.image.business(),
    'https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0',
    faker.image.business(),
  ];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider my-10">
      <FaArrowAltCircleLeft className="left-arrow " onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="right-arrow absolute top-[50%] right-[2%] z-10 cursor-pointer text-5xl text-zinc-500"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active text-center' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                alt="travel image"
                className="image inline-block"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
