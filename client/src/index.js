import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from './Components/Home';
import Forecast from './Components/Forecast';

ReactDOM.render(
	<Router>
		  <Route exact path='/' component={Home}/>
		  <Route exact path='/current-weather' component={Forecast}/>
		  {/* <Route exact path='/error' component={ErrorDisplay}/> */}
	</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
