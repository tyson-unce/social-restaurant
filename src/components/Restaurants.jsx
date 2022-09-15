import React from 'react';
import './compStyles/Restaurants.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
const Restaurants = () => {
	const [restaurants, showRestaurants] = useState([]);
	const [history, addHistory] = useState('');

	//usEffect tells it to do something on render, in this case I'm rendering the API when my component loads
	useEffect(() => {
		Axios.get('https://yelporsumthin.herokuapp.com/restaurants').then(
			(response) => {
				showRestaurants(response.data);
			}
		);
	}, []);

	// const addHistory = () => {
	// 	Axios.post('https://yelporsumthin.herokuapp.com/addHistory', {
	// 		name: name,
	// 	}).then(() => {
	// 		console.log('Table Updated');
	// 	});
	// };

	return (
		<div id='restPage'>
			<h1 className='restHeading'>Near You</h1>
			<div className='restContent'>
				<iframe src='https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20me&key=AIzaSyBb_zO6I2OtyHIfO9vUazpYzo37wPLrKTY'></iframe>

				<div className='restRest'>
					<div className='divScrolly'>
						{restaurants.map((val) => {
							return (
								<div className='restInfo'>
									<h1>{val.name}</h1>
									<div className='restGrid'>
										<div className='restLoc'>
											<h3>{val.address}</h3>
											<p>{val.website}</p>
										</div>
										<div>
											<button
												onClick={() => {
													addHistory(val.id);

													// for (let i = 0; i < restaurants.length; i++) {
													// 	if (val.id === history) {
													// 		console.log(val.website);
													// 	}
													// }
												}}
												className='historyButton'
											>
												check-in
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='historyContainer'>
				<h1 className='historyHeader'>
					My History <span>+</span>
				</h1>

				{history
					? restaurants.map((val) => {
							for (let i = 0; i < restaurants.length; i++) {
								if (val.id === history) {
									return (
										<div className='historyInfo'>
											<h1>{val.name}</h1>

											<p>time</p>
										</div>
									);
								}
							}
					  })
					: ''}
			</div>
		</div>
	);
};

export default Restaurants;
