import React from 'react';
import './compStyles/Navbar.css';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className='nav'>
			<nav>
				<ul className='navHome'>
					<li>
						<Link to='/#mainPage' smooth>
							Home
						</Link>
					</li>
					<li>
						<Link to='/#restPage' smooth>
							Restaurants
						</Link>
					</li>

					<li>
						<Link to='/Friends'>Friends</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
