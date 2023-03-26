import "../sass/pages/_Portfolio.scss"
import data from "../data"



function Portfolio(props) {

	const portfolioPhotos = data.portfolio ;


	const portfolioProjects = portfolioPhotos.map((image) => (
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
