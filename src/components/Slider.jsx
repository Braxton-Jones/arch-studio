import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/Slider.scss';
import data from '../data';


function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideMediaData = data.home

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide(
				(currentSlide) => (currentSlide + 1) % slideMediaData.length,
			);
		}, 5000);
		return () => clearInterval(timer);
	}, [slideMediaData.length]);

	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className='img-slider'>
			{slideMediaData.map((slide, index) => (
				<div
					key={index}
					className={`slide ${index === currentSlide ? 'active' : ''}`}
					style={{
						backgroundImage: `url(${slide.image})`,
					}}
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
				{slideMediaData.map((slide, index) => (
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
