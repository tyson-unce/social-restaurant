import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Friends from './components/Friends';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/Friends' element={<Friends />} />
		</Routes>
	</Router>
);
