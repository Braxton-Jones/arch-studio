import arrow from '../assets/icons/icon-arrow.svg';
import '../sass/pages/_Contact.scss';
function Contact() {
return (
	<section className='contact'>
		<div className='contact-hero'>
			<div className='contact-hero-content'>
				<h2>Tell us about your project</h2>
				<p>
					We’d love to hear more about your project. Please, leave a message
					below or give us a call. We have two offices, one in Texas and one in
					Tennessee. If you find yourself nearby, come say hello!
				</p>
			</div>
		</div>
		<span className='divider'></span>
		<div className='contact-body'>
			<div className='contact-body-content'>
				<div>
				<h2>Contact<br/> Details</h2>
				</div>
				<div className='contact-body-info'>
					<div>
					<h4 className='info-title'>Main Office</h4>
					<p>
						Mail: archone@mail.com
						<br />
						Address: 1892 Chenoweth Drive TN
						<br />
						Phone: 123-456-3451
					</p>
					</div>
					<div className='link'>
						<h4>View on Map</h4>
						<img src={arrow} />
					</div>
				</div>
				<div className='contact-body-info'>
					<div>
					<h4 className='info-title'>Office II</h4>
					
					<p>
						Mail: archtwo@mail.com
						<br />
						Address: 3399 Wines Lane TX
						<br />
						Phone: 832-123-4321
					</p>
					</div>
					<div className='link'>
						<h4>View on Map</h4>
						<img src={arrow} />
					</div>
				</div>
			</div>
		</div>
		<div className='contact-map'></div>
		<section className='contact-form'>
			<h2>Connect with us</h2>
			<form>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Email' />
				<input type='text' className='message' placeholder='Message' />
                <a>
                    <img src={arrow}/>
                </a>
			</form>
		</section>
	</section>
);
}

export default Contact;