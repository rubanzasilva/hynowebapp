import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/About';
import Shop from './pages/Shop';
import './App.css';
import ContactUs from './pages/contactUs';

class App extends Component {
render() {
	return (

	<Router>
		
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/about' element={< About />}></Route>
                <Route exact path='/shop' element={< Shop />}></Route>
				<Route exact path='/contactUs' element={< ContactUs />}></Route>
                <Route exact path='/signin' element={< signin />}></Route>

		</Routes>
	
	</Router>
);
}
}

export default App;
