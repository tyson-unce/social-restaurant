import React from 'react';
import './compStyles/Restaurants.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
const Restaurants = () => {
	const [restaurants, showRestaurants] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	useEffect(() => {
		Axios.get(
			'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+me&key=AIzaSyBb_zO6I2OtyHIfO9vUazpYzo37wPLrKTY'
		).then((response) => {
			showRestaurants(response.data);
		});
	}, []);
	let rawData = restaurants.results;
	// for (let i = 0; i < rawData.length; i++) {
	// 	console.log(rawData[i]['business_status']);
	// }
	return (
		<div id='restPage'>
			<h1 className='restHeading'>Near You</h1>
			<div className='restContent'>
				<iframe src='https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20me&key=AIzaSyBb_zO6I2OtyHIfO9vUazpYzo37wPLrKTY'></iframe>

				<div className='restRest'>
					<div className='divScrolly'>
						<div className='restInfo'>
							<h1>El Rincon</h1>
							<div className='restGrid'>
								<div className='restLoc'>
									<h3>this is the address</h3>
									<p>their website</p>
								</div>
								<div>
									<button
										className='historyButton'
										onClick={() => {
											console.log('hey');
										}}
									>
										check-in
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Restaurants;
