import React from 'react';
import './compStyles/Friends.css';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import { useEffect, useState } from 'react';
import Axios from 'axios';

const Friends = () => {
	const [discovery, showDiscovery] = useState([]);
	const [friends, showFriends] = useState('');

	//usEffect tells it to do something on render, in this case I'm rendering the API when my component loads
	useEffect(() => {
		Axios.get('https://yelporsumthin.herokuapp.com/discovery').then(
			(response) => {
				showDiscovery(response.data);
			}
		);
	}, []);

	// const addFriend = () => {
	// 	Axios.post('https://yelporsumthin.herokuapp.com/discovery', {
	// 		name: name,
	// 		location: location,
	// 		recent: recent,
	// 		image: image,
	// 	}).then(() => {
	// 		console.log('Table Updated');
	// 	});
	// };

	//creating post method for inserting data from frontend

	return (
		<div>
			<Navbar />
			<div className='bigDiv'>
				<div className='friendHeading'></div>
				<h1>Friends/History</h1>
				<div id='friendPage'>
					<div className='friendContainer'>
						<h1 className='boxHeader'>
							Discover <span className='plus'>+</span>
						</h1>

						{discovery.map((val) => {
							return (
								<div className='friendInfo'>
									<img src={val.image}></img>
									<h1>{val.name}</h1>
									<div className='addFButton'>
										<button
											onClick={() => {
												showFriends(val.id);
											}}
										>
											add friend
										</button>
									</div>
									<div className='location'>{val.location}</div>
									<div>
										<span className='hidden'>most recent</span> restaurant:
										<br />
										{val.recent}
									</div>
								</div>
							);
						})}
					</div>

					<div></div>
					<div className='friendContainer'>
						<h1 className='boxHeader'>Friends</h1>
						{friends
							? discovery.map((val) => {
									for (let i = 0; i < discovery.length; i++) {
										if (val.id === friends) {
											return (
												<div className='friendInfo'>
													<img src={val.image}></img>
													<h1>{val.name}</h1>
													<div className='addFButton'>
														<button>favorite</button>
													</div>
													<div className='location'>{val.location}</div>
													<div>
														<span className='hidden'>most recent</span>
														restaurant:
														<br />
														{val.recent}
													</div>
												</div>
											);
										}
									}
							  })
							: ''}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Friends;
