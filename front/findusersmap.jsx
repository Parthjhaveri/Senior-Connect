import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import LookingHelpForm from './lookingForHelpForm.jsx'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var FindUsersMap= React.createClass({

	  getInitialState() {
	  	return({map: ''})
	  },

	  componentDidMount() {
	  	//AIzaSyBoYXf4tn2ucdB4LNJYr6MOcO7LS9jtA3E

	  	var that = this;
	  	var apiKey = 'AIzaSyBoYXf4tn2ucdB4LNJYr6MOcO7LS9jtA3E';


	  	$.ajax({
	  		url: "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap",
	  		success: function(data) {
	  			console.log(data)

	  			// var mapData = data;
	  		}

	  		// that.setState({map: this.mapData})
	  	})

	  },

	  render() {
	    return (
				 <div className="usermapdiv">

					<div className="mapbanner">
						<center><h1>List of helpers in your area</h1></center>
					</div>

					  	<div id="map">

						  <iframe className="mapmap" src="//www.google.com/maps/embed/v1/place?q=saggio,New+York+City
						      &zoom=17
						      &key=AIzaSyApoxbxFhH0U8RG4_J9vrt5OSGAoUdXoWo">
						  </iframe>

						</div>


			 	 </div>
	    )
	  }
})

export default FindUsersMap;
