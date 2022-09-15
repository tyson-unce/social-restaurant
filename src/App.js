import './App.css';
import Landing from './components/Landing.tsx';
import Restaurants from './components/Restaurants.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

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
