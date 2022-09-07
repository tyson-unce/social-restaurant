import React from 'react';
import './compStyles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className='nav'>
			<nav>
				<ul className='navHome'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>

					<li>
						<NavLink to='/Restaurants'>Restaurants</NavLink>
					</li>

					<li>
						<NavLink to='/Friends'>Friends</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
