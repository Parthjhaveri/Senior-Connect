import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'
import $ from 'jquery'
import LookingHelpAddress from './lookingHelpAddress.jsx'
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

var LookingHelpForm= React.createClass({
  getInitialState: function() {
    return {firstName: '', lastName: '', zip: null, pantryLocation: '', location: '',isAvailable: true, beacon: false, eta: null, helper: '', helpee: '',
      bouncingBall: ['Please enter your first name',
        'Please enter your last name',
        'Please enter your zip',
        'Please select your food pantry',
        'Please enter your address'
      ],
      counter: 0,
      pantryList: [],
      textBox: ''
    }
  },
  updatePantry(e) {
    this.setState({textBox: e.currentTarget.value}, function() {
      // for (let i = 0; i < this.state.pantryList.length; i++){
      //   if (this.state.pantryList[i].name = this.state.textBox) {
      //     this.state.pantryLocation = this.state.pantryList[i]
      //   }
      // }
      this.setState({pantryLocation: this.state.textBox})
    })
  },
  textBoxUpdate(e) {
    this.setState({textBox: e.currentTarget.value})
  },
  increaseCounter() {
    let newCounter = this.state.counter
    newCounter += 1;
    this.setState({counter: newCounter})
  },
  handleSubmit() {
    switch (this.state.counter) {
      case 0:
        let newFirstName = document.getElementById('bouncingBall').value
        this.setState({firstName: newFirstName}, function() {
          this.increaseCounter()
          this.setState({textBox: ''})
        })
      break;
      case 1:
        let newLastName = document.getElementById('bouncingBall').value
        this.setState({lastName: newLastName}, function () {
          this.increaseCounter()
          this.setState({textBox: ''})
        })
      break;
      case 2:
        let newZip = document.getElementById('bouncingBall').value
        this.setState({zip: newZip}, function() {
          let url = "https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/" + this.state.zip + "/programs?api_key=b0f6c6a6a8be355fc04be76ab3f0c5e6&serviceTag=food+pantry&cursor=0&limit=10&attributeTag=seniors,all+ages"
          $.ajax({
            url: url,
            success: (data) => {
              let newPantryList = this.state.pantryList
              data.programs.forEach((ele) => {
                let newObj = {}
                newObj.lat = ele.offices[0].location.latitude
                newObj.lon = ele.offices[0].location.longitude
                newObj.name = ele.provider_name
                newPantryList.push(newObj)
                })
              this.setState({pantryList: newPantryList}, () => {
                this.increaseCounter()
                this.setState({textBox: ''})
              })
            }
          })
        })
      break;
      case 3:
        this.setState({pantryLocation: this.state.pantryList})
      break;
      }
    },
  render: function() {
    let mainView = null
    let pantryList = null
    if (this.state.pantryList.length >= 1) {
      let options = []
      this.state.pantryList.forEach((ele, ind) => {
        options.push(<option key={ind} value={ele.name}>{ele.name}</option>)
      })
      pantryList = <div><select id='pantries' onChange={this.updatePantry}>{options}</select></div>
    }
    if (this.state.pantryLocation) {
      let src = "//www.google.com/maps/embed/v1/place?q=" + this.state.pantryLocation + ",New+York&zoom=17&key=AIzaSyApoxbxFhH0U8RG4_J9vrt5OSGAoUdXoWo"
        mainView =
        <iframe className="mapmap" src={src}>
        </iframe>

      } else {
        mainView =
          <div className="seekingHelpForm" id="namebanner">

          <div className="namebanner">
            <center><h2>{this.state.bouncingBall[this.state.counter]}</h2></center>
          </div>
          {pantryList}
          <input id='bouncingBall' type="text" className="nameinput" onChange={this.textBoxUpdate} value={this.state.textBox} />
          <br />
            <button className="namesubmit" onClick={this.handleSubmit}>SUBMIT</button>
          </div>

    }
    return (
			 <div className="seekingHelpPage">

			 	<center>
          {mainView}
			 	</center>

		 	 </div>
    )
  }
})

export default LookingHelpForm;
