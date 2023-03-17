import images from "../assets/data.json"
import "../sass/pages/_Portfolio.scss"
function Portfolio(props) {


	const portfolioProjects = images.portfolio.map((image) => (
		<div className='portfolio-grid-image' key={image.id}>
			<img src={image.imageSources[props.deviceBreakpoint]} />
			<div className="grid-content">
				<h2>{image.title}</h2>
				<p>{image.date}</p>
			</div>
		</div>
	));

	return(
		<section className="portfolio-grid">
			{portfolioProjects}
		</section>
	);
}

export default Portfolio;
