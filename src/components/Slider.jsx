import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/Slider.scss';
import paramour from '../assets/home/desktop/image-hero-paramour.jpg';
import federal from '../assets/home/desktop/image-hero-federal.jpg';
import seraph from '../assets/home/desktop/image-hero-seraph.jpg';
import trinity from '../assets/home/desktop/image-hero-trinity.jpg';

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideMediaData = [
		{
			id: 1,
			image: paramour,
			name: 'Project Paramour',
			desc: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
		},
		{
			id: 2,
			image: federal,
			name: 'Federal II Tower',
			desc: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
		},
		{
			id: 3,
			image: seraph,
			name: 'Seraph Station',
			desc: 'The Seraph Station project challenged us to design a unique station that would transport people through time.The result is a fresh and futuristic model inspired by space stations.',
		},
		{
			id: 4,
			image: trinity,
			name: 'Trinity Bank Tower',
			desc: 'Trinity Bank challenged us to make a concept for a 8 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
		},
	];

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
