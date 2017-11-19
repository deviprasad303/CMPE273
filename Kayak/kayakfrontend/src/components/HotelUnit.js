import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
//var GoogleMapsLoader = require('google-maps'); 
 import hotelPage from './HotelPage';
class HotelUnit extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false,
         view:"rooms"
        }
    }
    componentWillMount(){
       // GoogleMapsLoader.load(function(google) {
   // new google.maps.Map(el, options);
//});
    }
setFlag = () => {
    console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }
gotohotel = () =>{
    this.props.history.push("/hotelPage");
}
gotopayment = () =>{
    this.props.history.push("/hotelForm");
}
  render() {
      //var rooms = <span>rooms</span>;
      var roomjson = 
          [
              {
                  "roomType":"Superior Room",
                  "bedType" :"2 King bed",
                  "freeCancellation" : true,
                  "price" : 120
              },
              {
                  "roomType":"King Room",
                  "bedType" :"1 King bed",
                  "freeCancellation" : false,
                  "price" : 70
              }
          ]
      var roomsData = [];
       roomjson.map(function(temp, index) {
            var cancelObj = null;
           if(temp.freeCancellation == true)
            cancelObj = <span className="can-style">Free Cancellation</span>
           roomsData.push(<div className="row top-border text-align-left padding-13">
                          <div className="col-md-3">
                          <span>{temp.roomType}</span>
                          </div>
                          <div className="col-md-2">
                           <span>{temp.bedType}</span>
                          </div>
                          <div className="col-md-2">
                          {cancelObj}
                          </div>
                          <div className="col-md-2">
                          <span>${temp.price}</span>
                          </div>
                          <div className="col-md-3">
                           <button onClick={ () =>{this.gotopayment()}} className="view-details-popup-button line-height-27">BOOK</button>
                          </div>
                          </div>
           );
                }.bind(this));
    return (
        <div className="pad-top-10  margin-right-40">
        
        <div className="row backgroud-white">
         <div className="col-md-4 padding-none">
         <img src="hotel.jpg"  className="hotel-logo"/>
        </div>
         <div className="col-md-6">
        <div className="text-align-left">
        <span onClick={this.gotohotel} className="font-size-19">Hotel Name</span>
        </div>
        <div className="text-align-left">
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
        </div>
        <div className="text-align-left">
        <div className="row pad-top-30">
        <div className="col-md-4">
        <span className="review-style">8.6</span>
        </div>
        <div className="col-md-4">
        <p className="margin-bottom-none">Excellent</p>
        <p className="font-size-11">234 reviews</p>
        </div>
         <div className="col-md-4">
        <p className="margin-bottom-none">Location</p>
        <p className="font-size-11">San Jose</p>
        </div>
        </div>
        </div>
        </div>
         <div className="col-md-2">
          <div>
        
        <div className="price-style">$719</div>
        <div className=" pad-top-30">
        <button onClick={ () =>{this.setFlag()}} className="view-details-popup-button line-height-27">VIEW DETAILS</button>
        </div>        
        </div>
        </div>
        </div>
{
          this.state.flag
            ? <div className="row backgroud-white pad-15">
              <div className="text-align-left pad-top-10">
              <span className="padding-right-30" onClick={ () =>{this.setView("rooms")}} >Rooms</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("details")}} >Details</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("map")}} >Map</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("reviews")}} >Reviews</span>
              </div>
        <div>
        {(this.state.view === "rooms")?
             <div>
              <div className="row pad-img-tab">
              <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          </div>
              <div className="row padding-13 text-align-left">
                          <div className="col-md-3">
                          <span className="room-data-header">Room Type</span>
                          </div>
                          <div className="col-md-2">
                           <span className="room-data-header">Bed Type</span>
                          </div>
                          <div className="col-md-2">
                         <span className="room-data-header"> Conditions </span>
                          </div>
                          <div className="col-md-2">
                          <span className="room-data-header">Nightly</span>
                          </div>
                          <div className="col-md-3">
                           
                          </div>
                          
          
              </div>
                {roomsData}
            <div className="row text-align-left">
              <span className="room-disclaimer">Rooms pictured for reference. Booked room will depend on availability & room type.</span>
              </div>
          <div className="row">
              <span className="pull-left">
              <Ionicon icon="md-share" 
                              className="cursor-pointer padding-right-3" fontSize="15px" color="#000000"/>
        <span className="padding-right-3 font-size-8">SHARE</span>
              </span>
              <span className="goto pull-right">SHOW ALL RATES & ROOM TYPES </span>
              </div>
              </div>  
          
          :null
}</div>
          
          <div>
        {(this.state.view === "details")?
              <div>
         <div>Excellent hotel. Great rooms in excellent location. Awesome vibe.</div>
         </div>:null
}</div>
          <div>
        {(this.state.view === "map")?
              <span>map</span>:null
}</div>
          <div>
        {(this.state.view === "reviews")?
              <span>reviews</span>:null
}</div>
        </div>
            : null
        }
</div>
           
    );
  }
}

export default withRouter(HotelUnit);
