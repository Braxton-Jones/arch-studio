import "../sass/pages/_Home.scss"
import {Link} from 'react-router-dom';
import Slider from "../components/Slider";
import fog from "."
function Home(props){
	const image = [
		{
			id: 1,
			imageSources: {
				mobile: import('../src/assets/portfolio/mobile/image-seraph.jpg'),
				tablet: import('../src/assets/portfolio/tablet/image-seraph.jpg'),
				desktop: import('../src/assets/portfolio/desktop/image-seraph.jpg'),
			},
			title: 'Seraph Station',
			date: 'September 2019',
		},

		{
			id: 2,
			imageSources: {
				mobile: import('../src/assets/portfolio/mobile/image-eebox.jpg'),
				tablet: require('../src/assets/portfolio/tablet/image-eebox.jpg'),
				desktop: require('../src/assets/portfolio/desktop/image-eebox.jpg'),
			},
			title: 'Eebox building',
			date: 'August 2017',
		},

		{
			id: 3,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-federal.jpg',
				tablet: 'src/assets/portfolio/tablet/image-federal.jpg',
				desktop: 'src/assets/portfolio/desktop/image-federal.jpg',
			},
			title: 'Federal II Tower',
			date: 'March 2017',
		},

		{
			id: 4,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-del-sol.jpg',
				tablet: 'src/assets/portfolio/tablet/image-del-sol.jpg',
				desktop: 'src/assets/portfolio/desktop/image-del-sol.jpg',
			},
			title: 'Project Del Sol',
			date: 'January 2016',
		},

		{
			id: 5,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-prototype.jpg',
				tablet: 'src/assets/portfolio/tablet/image-prototype.jpg',
				desktop: 'src/assets/portfolio/desktop/image-prototype.jpg',
			},
			title: 'Le Prototype',
			date: 'October 2015',
		},

		{
			id: 6,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-228b.jpg',
				tablet: 'src/assets/portfolio/tablet/image-228b.jpg',
				desktop: 'src/assets/portfolio/desktop/image-228b.jpg',
			},
			title: '228B Tower',
			date: 'April 2015',
		},

		{
			id: 7,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-edelweiss.jpg',
				tablet: 'src/assets/portfolio/tablet/image-edelweiss.jpg',
				desktop: 'src/assets/portfolio/desktop/image-edelweiss.jpg',
			},
			title: 'Grand Edelweiss',
			date: 'December 2013',
		},

		{
			id: 8,
			imageSources: {
				mobile: './src/assets/portfolio/mobile/image-netcry.jpg',
				tablet: './src/assets/portfolio/tablet/image-netcry.jpg',
				desktop: './src/assets/portfolio/desktop/image-netcry.jpg',
			},
			title: 'Netcry Tower',
			date: 'August 2012',
		},

		{
			id: 9,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-hypers.jpg',
				tablet: 'src/assets/portfolio/tablet/image-hypers.jpg',
				desktop: 'src/assets/portfolio/desktop/image-hypers.jpg',
			},
			title: 'Hypers',
			date: 'January 2012',
		},

		{
			id: 10,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-sxiv.jpg',
				tablet: 'src/assets/portfolio/tablet/image-sxiv.jpg',
				desktop: 'src/assets/portfolio/desktop/image-sxiv.jpg',
			},
			title: 'SXIV Tower',
			date: 'March 2011',
		},

		{
			id: 11,
			imageSources: {
				mobile: 'src/assets/portfolio/mobile/image-trinity.jpg',
				tablet: 'src/assets/portfolio/tablet/image-trinity.jpg',
				desktop: 'src/assets/portfolio/desktop/image-trinity.jpg',
			},
			title: 'Trinty Bank Tower',
			date: 'September 2010',
		},

		{
			id: 12,
			imageSources: {
				mobile: './src/assets/portfolio/mobile/image-paramour.jpg',
				tablet: './src/assets/portfolio/tablet/image-paramour.jpg',
				desktop: './src/assets/portfolio/desktop/image-paramour.jpg',
			},
			title: 'Project Paramour',
			date: 'February 2008',
		},
	];
 const imageshort = image.slice(3, 6)
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
						<button className='button' id="hidden-lg">See All</button>
					</div>

					<div className='home-projects-grid'>
						<div className='grid'>
							<img src={imageshort[0].imageSources[props.deviceBreakpoint]} />
							<h4>Project Del Sol</h4>
							<h1 className="grid-index">1</h1>
						</div>
						<div className='grid'>
							<img src={imageshort[2].imageSources[props.deviceBreakpoint]} />
							<h4>228B Tower</h4>
							<h1 className="grid-index">2</h1>
						</div>
						<div className='grid'>
							<img src={imageshort[1].imageSources[props.deviceBreakpoint]} />
							<h4>Le Prototype</h4>
							<h1 className="grid-index">3</h1>
						</div>
						<button className='button' id="hidden-sm">See All</button>
					</div>
				</section>
			</section>
		);
}

export default Home