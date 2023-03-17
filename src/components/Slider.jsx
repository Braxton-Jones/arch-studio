import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useImport } from 'use-import';
import '../sass/components/Slider.scss';

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Dynamically load data file using useImport hook
	const [slides] = useImport(() =>
		import('../assets/data.json').then((module) => module.default.home),
	);

	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className='img-slider'>
			{slides &&
				slides.map((slide, index) => (
					<div
						key={index}
						className={`slide ${index === currentSlide ? 'active' : ''}`}
						style={{
							backgroundImage: `url(${
								require(`../assets/home/desktop/${slide.image}`).default
							})`,
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
				{slides &&
					slides.map((slide, index) => (
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
