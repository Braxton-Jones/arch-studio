import "../sass/pages/_Home.scss"
import {Link} from 'react-router-dom';
import Slider from "../components/Slider";
import data from '../data';


function Home(props){
	const images = data.portfolio.filter((item) => item.id >= 4 && item.id <= 6);
	console.log(images)

const featuredProjects = images.map(image => {
	return (
		<div className='grid' key={image.title}>
			<img src={image.imageSources[props.deviceBreakpoint]} />
			<h4>{image.title}</h4>
			<h1 className='grid-index'>{image.index}</h1>
		</div>
	);
})
    return (
			<section className='home'>
				{props.deviceBreakpoint === "desktop" ? 
				<Slider/> : 
				<section className='home-hero'>
					<div>
						<h1>Project Paramour</h1>
						<p>
							Project made for an art museum near Southwest London. Project
							Paramour is a statement of bold, modern architecture.
						</p>
						<Link to='/portfolio'>
							<button className='button'>See Our Portfolio</button>
						</Link>
					</div>
				</section> }
				
				<span className='divider'></span>
				<section className='home-body'>
					<div className="home-body-content">
					<h2>Welcome to Arch Studio</h2>
					<p>
						We have a unique network and skillset to help bring your projects to
						life. Our small team of highly skilled individuals combined with our
						large network put us in a strong position to deliver exceptional
						results.
					</p>
					<p>
						Over the past 10 years, we have worked on all kinds of projects.
						From stations to high-rise buildings, we create spaces that inspire
						and delight.
					</p>
					<p>
						We work closely with our clients so that we understand the
						intricacies of each project. This allows us to work in harmony the
						surrounding area to create truly stunning projects that will stand
						the test of time.
					</p>
					</div>
				</section>

				<section className='home-about'>
					<div>
						<h1>
							Small team,
							<br />
							big ideas
						</h1>
						<Link to="/about">
						<button className='button'>About Us</button>
						</Link>
					</div>
				</section>

				<section className='home-projects'>
					<div className="home-projects-title">
						<h2>Featured</h2>
						<Link to="/portfolio">
							<button className='button' id="hidden-lg">See All</button>
						</Link>
						
					</div>

					<div className='home-projects-grid'>
					{featuredProjects}
						<button className='button' id="hidden-sm">See All</button>
					</div>
				</section>
			</section>
		);
}

export default Home