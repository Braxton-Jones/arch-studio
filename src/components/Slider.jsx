import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../assets/data.json"
import "../sass/components/Slider.scss"


function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = data.home

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((currentSlide + 1) % slides.length);
		}, 9000);
		return () => clearInterval(interval);
	}, [currentSlide, slides.length]);

	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className='img-slider'>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`slide ${index === currentSlide ? 'active' : ''}`}
					style={{ backgroundImage: `url(/src/assets/home/desktop/${slide.image})`}}
				>
					<div className='info'>
						<h2>{slide.name}</h2>
						<p>{slide.desc}</p>
						<Link to='/portfolio' className='slider-link'>
							<button className='button slider-btn'>See Our Portfolio</button>
						</Link>
					</div>
				</div>
			))}
			<div className='navigation'>
				{slides.map((slide, index) => (
					<div
						key={index}
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
