import './App.css';
import Landing from './components/Landing.jsx';
import Restaurants from './components/Restaurants.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<div>
			<Navbar />
			<Landing />
			<Restaurants />
			<Footer />
		</div>
	);
}

export default App;
