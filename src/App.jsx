import './sass/app.scss';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import MobileMenu from './components/MobileMenu';
import logo from './assets/logo.svg';
import hamburgerMenu from './assets/icons/icon-hamburger.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function App() {
	const isMobile = useMediaQuery({ minWidth: 600 });
	const isTablet = useMediaQuery({ minWidth: 768 });
	const isDesktop = useMediaQuery({ minWidth: 1080 });

	const [deviceBreakpoint, setDeviceBreakpoint] = useState('mobile');
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isDesktop) {
			setDeviceBreakpoint('desktop');
		} else if (isTablet) {
			setDeviceBreakpoint('tablet');
		} else if (isMobile) {
			setDeviceBreakpoint('mobile');
		}
	}, [isMobile, isTablet, isDesktop]);

	function handleMenuToggle() {
		setIsOpen(!isOpen);
	}
	function handleScroll() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<BrowserRouter>
			<main>
				<section className='navbar'>
					<Link to='/arch-studio'>
						<img src={logo} />
					</Link>
					<div>
						{isTablet ? (
							<div className='nav-links'>
								<Link to='/portfolio'>
									<p>Portfolio</p>
								</Link>
								<Link to='/about'>
									<p>About Us</p>
								</Link>
								<Link to='/contact'>
									<p>Contact</p>
								</Link>
							</div>
						) : (
							<>
								<img src={hamburgerMenu} onClick={handleMenuToggle} />
							</>
						)}
					</div>
				</section>
				{isOpen ? <MobileMenu onMenuClick={handleMenuToggle} /> : <span></span>}
				<Routes>
					<Route
						exact
						path='/'
						element={<Home deviceBreakpoint={deviceBreakpoint} />}
					/>
					<Route
						path='/portfolio'
						element={<Portfolio deviceBreakpoint={deviceBreakpoint} />}
					/>
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
				</Routes>
				<footer>
					<div className='footer-logo'>
						<Link to='/' onClick={handleScroll}>
							<img src={logo} />
						</Link>
					</div>

					<div className='footer-links'>
						<Link
							to='/portfolio'
							className='footer-link-text'
							onClick={handleScroll}
						>
							<p>Portfolio</p>
						</Link>
						<Link
							to='/about'
							className='footer-link-text'
							onClick={handleScroll}
						>
							<p>About Us</p>
						</Link>
						<Link
							to='/contact'
							className='footer-link-text'
							onClick={handleScroll}
						>
							<p onClick={handleScroll}>Contact</p>
						</Link>
					</div>

					<button className='button'>
						<Link
							to='/portfolio'
							className='button-text'
							onClick={handleScroll}
						>
							See our Portfolio
						</Link>
					</button>
				</footer>
			</main>
		</BrowserRouter>
	);
}

export default App;
