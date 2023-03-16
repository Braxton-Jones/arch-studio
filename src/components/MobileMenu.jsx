import "../sass/components/MobileMenu.scss"
import { Link } from 'react-router-dom';
function MobileMenu(props){
return (
	<>
		<div className='overlay'>
			<nav>
				<div>
					<li>
						<Link to='/portfolio' className='link' onClick={props.onMenuClick}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link to='/about' className='link' onClick={props.onMenuClick}>
							About Us
						</Link>
					</li>
					<li>
						<Link to='/contact' className='link' onClick={props.onMenuClick}>
							Contact
						</Link>
					</li>
				</div>
			</nav>
		</div>
	</>
);
}
export default MobileMenu