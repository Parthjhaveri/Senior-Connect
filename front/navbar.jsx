import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import LookingHelpForm from './lookingForHelpForm.jsx'
import Home from './homePage.jsx'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var Navbar = React.createClass({
  render() {
    return (
			 
			<div className="navi">
				  
				  		<Link to='/'>	
							<span className="seniorconnectlogo"><p><span className="seniorspan">Senior</span>Connect</p></span>
			 			</Link>

		 	</div>
    )
  }
})

export default Navbar;
