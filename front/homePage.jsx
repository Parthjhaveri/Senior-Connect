import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import LookingHelpForm from './lookingForHelpForm.jsx'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var Home = React.createClass({

  componentDidMount() {

  	$('#leftBox').mouseover(function() {
  		$('.whiteboxhr').css({'width':'300px', 'transition':'1s'})
  	})

  	$('#leftBox').mouseout(function() {
  		$('.whiteboxhr').css({'width':'20%', 'transition':'1s'})
  	})

  	$('#rightBox').mouseover(function() {
  		$('.boxhr').css({'width':'300px', 'transition':'1s'})
  	})

  	$('#rightBox').mouseout(function() {
  		$('.boxhr').css({'width':'20%', 'transition':'1s'})
  	})

  },

  render: () => {
    return (
			 <div>

		   		<div className="row">

				  	<Link to="/seekinghelp">
					  <div className="col-md-6" id="leftBox">
					  	
					  	<center>I need a <strong>Service</strong></center>

					  	<hr className="whiteboxhr" />

					  	<center>
					  		<p id="seniorinst">
					  			Seniors may click here to 
					  			find a list of <strong>helpers</strong><br/>
					  			in their close vicinity
					  		</p>

					  		<button className="request">Request</button>
					  	</center>

					  </div>
					</Link>
				  
				  <div className="col-md-6" id="rightBox">
				  	
				  	<center>I'm looking to help out!</center>

				  		<hr className="boxhr" />

				  			<center>
						  		<p id="seniorinst">
						  			Volunteers may click here to 
						  			find a list of <strong>Seniors</strong><br/>
						  			in their close vicinity who request a Service
						  		</p>

						  		<button className="request" id="volunteer">Volunteer</button>
					  		</center>

				  </div>

				</div>

				<div className="livefeed">
					<center><h2>Look at recent requests!</h2></center>
					<center><h2><span className="glyphicon glyphicon-menu-down"></span></h2></center>
				</div>

				<div className="reqfeed">

				<center>
					<div className="feedtable">

					</div>
				</center>

				</div>

		 	</div>
    )
  }
})

export default Home;
