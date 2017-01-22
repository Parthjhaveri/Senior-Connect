import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import LookingHelpForm from './lookingForHelpForm.jsx'
import FindUsersMap from './findusersmap'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var LookingHelpAddress= React.createClass({
  render: () => {
    return (
			 <div className="seekingHelpPage">

			 	<center>
			 		<div className="seekingHelpForm">
			 			<div className="namebanner">
				 			<center><h2>Please enter your address below</h2></center>
				 		</div>
				 		<br/>
			 			<input type="text" placeholder="Enter your Zip" className="zipcode" />
			 			<br/>

			 			<Link to="/findnearbyusers">
			 				<button className="namesubmit">SUBMIT</button>
			 			</Link>

			 		</div>
			 	</center>

		 	 </div>
    )
  }
})

export default LookingHelpAddress;