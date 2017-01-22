import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import Home from './homePage.jsx'
import LookingHelpForm from './lookingForHelpForm.jsx'
import LookingHelpAddress from './lookingHelpAddress.jsx'
import Navbar from './navbar.jsx'
import FindUsersMap from './findusersmap.jsx'
import Footer from './footer.jsx'

import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';
var $ = require('jquery');

var App = React.createClass({
  render() {
    return (
			 <div>
			 	<Navbar />
		  		{this.props.children}
		  		<Footer />
		 	</div>
    )
  }
})


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      	<Route path='/seekinghelp' component={LookingHelpForm} />
      	<Route path='/seekinghelpaddress' component={LookingHelpAddress} />
      	<Route path='/findnearbyusers' component={FindUsersMap} />
    </Route>
  </Router>,
  document.getElementById('root')
);