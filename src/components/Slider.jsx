import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../assets/data.json"
import "../sass/components/Slider.scss"


import { useState, useEffect } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const renderSlide = async (slide) => {
    const { image, name, desc } = slide;
    const { default: backgroundImage } = await import(`../assets/home/desktop/${image}`);

    return (
      <div
        key={image}
        className={`slide ${slides.indexOf(slide) === currentSlide ? 'active' : ''}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='info'>
          <h2>{name}</h2>
          <p>{desc}</p>
          <Link to='/portfolio' className='slider-link'>
            <button className='button slider-btn'>See Our Portfolio</button>
          </Link>
        </div>
      </div>
    );
  };

  const slides = [
    { image: 'image1.jpg', name: 'Slide 1', desc: 'Description 1' },
    { image: 'image2.jpg', name: 'Slide 2', desc: 'Description 2' },
    { image: 'image3.jpg', name: 'Slide 3', desc: 'Description 3' },
  ];

  return (
    <div className='img-slider'>
      {slides.map((slide) => renderSlide(slide))}
      <div className='navigation'>
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`btn ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          >
            0{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
