import React from 'react';
import './compStyles/Landing.css';
import { HashLink as Link } from 'react-router-hash-link';

const Landing = () => {
	return (
		<div id='mainPage'>
			<h1>Tyson's Eats</h1>
			<p>
				No one is really tryna go on 40 different websites, so we got you, click
				​
				<Link to='/#restPage' smooth>
					HERE
				</Link>
				​ to see restaurants near you.
			</p>
		</div>
	);
};

export default Landing;
