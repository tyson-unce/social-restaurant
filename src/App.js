import './App.css';
import Landing from './components/Landing';
import Restaurants from './components/Restaurants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
