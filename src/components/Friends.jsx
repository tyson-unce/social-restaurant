import React from 'react';
import './compStyles/Friends.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Friends = () => {
	return (
		<div>
			<Navbar />
			<div className='bigDiv'>
				<div className='friendHeading'></div>
				<h1>Friends/History</h1>
				<div id='friendPage'>
					<div className='friendContainer'>
						<h1 className='boxHeader'>
							Discover <span>+</span>
						</h1>
						<div className='friendInfo'>
							<img src='./images/tysonUnce.jpeg'></img>
							<h1>Samantha</h1>
							<div className='addFButton'>
								<button>add friend</button>
							</div>
							<div>pville</div>
							<div>
								most recent restaurant:
								<br />
								thai's
							</div>
						</div>
					</div>

					<div></div>
					<div className='friendContainer'>
						<h1 className='boxHeader'>Friends</h1>
						<div className='friendInfo'>
							<img src='./images/tysonUnce.jpeg'></img>
							<h1>Samantha</h1>
							<div className='addFButton'></div>
							<div>pville</div>
							<div>
								most recent restaurant:
								<br />
								thai's
							</div>
						</div>
					</div>
				</div>
				<div className='historyContainer'>
					<h1 className='historyHeader'>
						My History <span>+</span>
					</h1>
					<div className='historyInfo'>
						<h1>El Rincon</h1>

						<p>time</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Friends;
