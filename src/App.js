import './App.css';
import Friends from './components/Friends';
import Landing from './components/Landing';
import Restaurants from './components/Restaurants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/Restaurants' element={<Restaurants />} />
				<Route path='/Friends' element={<Friends />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
