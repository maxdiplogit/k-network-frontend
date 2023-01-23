// Packages
import axios from 'axios';


// React Hooks
import { Route, Routes } from 'react-router-dom';


// Components
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import NewMessage from './components/NewMessage/NewMessage';


// Store Actions
import { contactsActions } from './store';


// Styles
import './App.css';


const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/:contactID' element={ <Contact /> } />
				<Route path='/:contactID/newMessage' element={ <NewMessage /> } />
			</Routes>
		</>
	);
};


export default App;