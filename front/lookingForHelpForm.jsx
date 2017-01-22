import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import LookingHelpAddress from './lookingHelpAddress.jsx'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var LookingHelpForm= React.createClass({
  render: () => {
    return (
			 <div className="seekingHelpPage">

			 	<center>
			 		<div className="seekingHelpForm" id="namebanner">
			 		
				 		<div className="namebanner">
				 			<center><h2>Please enter your name below</h2></center>
				 		</div>

			 			<input type="text" placeholder="Enter your name here" className="nameinput" />
			 			<br />
			 			<Link to="/seekinghelpaddress">
			 				<button className="namesubmit">SUBMIT</button>
			 			</Link>

			 		</div>
			 	</center>

		 	 </div>
    )
  }
})

export default LookingHelpForm;