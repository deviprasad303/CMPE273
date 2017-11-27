import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
var divStyle = {
 position: "relative",
    top: "-40px",
    left: "73px"
  
};
var places = [
      "San Jose",
      "San Fransisco",
      "New York",
      "Dallas",
      "Nevada",
      "Milpitas",
      "Colonnade",
      "Stanford",
      "Newark",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell"
    ];

class FlightSearchBox extends Component {
    constructor(props) {
            super(props);
        }
     componentDidMount() {
           var options = '';

  for(var i = 0; i < places.length; i++)
    options += '<option value="'+places[i]+'" />';

  document.getElementById('placeList').innerHTML = options;
       /*  debugger;
         var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			//container: container,
			todayHighlight: true,
			autoclose: true,
		})*/
          document.getElementById("removeAdultBtn").disabled = true;
                document.getElementById("removeSeniorBtn").disabled = true;
                document.getElementById("removeYouthBtn").disabled = true;
                document.getElementById("removeChildrenBtn").disabled = true;
         
    }
                 
     addTraveller(btnid,txtid,removebtnid){
        
        if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("seniorTextBtn").innerHTML))+(parseInt(document.getElementById("youthTextBtn").innerHTML)))<6)
            {
                 document.getElementById(txtid).innerHTML= parseInt(document.getElementById(txtid).innerHTML)+parseInt("1");
                document.getElementById(removebtnid).disabled = false;
}
       
if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("seniorTextBtn").innerHTML))+(parseInt(document.getElementById("youthTextBtn").innerHTML)))>=6)
            {
                
                  document.getElementById("addAdultBtn").disabled = true;
                document.getElementById("addSeniorBtn").disabled = true;
                document.getElementById("addYouthBtn").disabled = true;
                document.getElementById("addChildrenBtn").disabled = true;
                
}
         var res=((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("seniorTextBtn").innerHTML))+(parseInt(document.getElementById("youthTextBtn").innerHTML)));
        
                  var flightInfoVal=document.getElementById("FlightInfoTxtBox").value;
       var val=flightInfoVal.split(",");
       var result=res+"Travellers ,"+val[1];
        document.getElementById("FlightInfoTxtBox").value=result;
                  
         
    }
    
 
    
     removeTraveller(btnid,txtid,addbtnid){
        if((parseInt(document.getElementById(txtid).innerHTML))!=0)
            {
                document.getElementById("addAdultBtn").disabled = false;
                document.getElementById("addSeniorBtn").disabled = false;
                document.getElementById("addYouthBtn").disabled = false;
                document.getElementById("addChildrenBtn").disabled = false;
           document.getElementById(txtid).innerHTML= parseInt(document.getElementById(txtid).innerHTML)-parseInt("1");

    }
         
         if((parseInt(document.getElementById("adultTextBtn").innerHTML))==1)
         {
             document.getElementById("removeAdultBtn").disabled = true;
         }
         var res=((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("seniorTextBtn").innerHTML))+(parseInt(document.getElementById("youthTextBtn").innerHTML)));
        
                  var flightInfoVal=document.getElementById("FlightInfoTxtBox").value;
       var val=flightInfoVal.split(",");
       var result=res+"Travellers ,"+val[1];
        document.getElementById("FlightInfoTxtBox").value=result;
     }

  showHideChangePopUpjQ(m) {
    var disp = m === 'hide' ? 'none' : 'block';
    //$('#div_change_qty').css("display", disp);
          document.getElementById("div_change_qty").style.display=disp;
}
    popUpClose(){
       //$('#div_change_qty').css("display", 'none'); 
       // document.getElementById("div_change_qty").css("display", 'none');
        document.getElementById("div_change_qty").style.display='none';
}
    popUpDisplay(){
        //$('#div_change_qty').css("display", 'block');
         document.getElementById("div_change_qty").style.display= 'block';
}
    
     
	
    myFunction() {
   }
calendarDisplay(){
  /*  debugger;
      var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})*/
}
    swapValues(){
        debugger;
        var valFrom;
        var valTo;
     
        valFrom=document.getElementById("flightFrom").value;
        valTo=document.getElementById("flightTo").value;
        document.getElementById("flightFrom").value=valTo;
        document.getElementById("flightTo").value=valFrom;
    }
    changeFlightClass(txt){
           
       var flightInfoVal=document.getElementById("FlightInfoTxtBox").value;
       var val=flightInfoVal.split(",");
       var result=val[0]+","+txt;
        document.getElementById("FlightInfoTxtBox").value=result;
        //$('#FlightInfoTxtBox').val(result);
        //alert($('#FlightInfoTxtBox').val())
    }


        render() {
         
                          return (
                              
         <div className = "flightbootstrap-iso">
<div className = "container-fluid" >
<div className = "row">
<div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" list ="placeList" id = "flightFrom"/>
                              <datalist id="placeList"></datalist>
</ div>
    <div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" list ="placeList" id = "flightTo"/>
                              <datalist id="placeList"></datalist>
</ div>
<button  type = "button" className = "btn btn-default transferStyling" onClick={()=>this.swapValues()}>
<span className = "glyphicon glyphicon-transfer" ></ span>
</ button>
<div className = "col-sm-2 col-xs-2 hotelFields" id = "aaa">
<input className = "form-control datepicker" id = "date" name = "date"  placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()} / >

</ div>
<div className = "col-sm-2 col-xs-2 hotelFields">
<input className = "form-control datepicker" id = "date1" name = "date" placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()}  / >

</ div>

<div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" value="1 adult,Economy" id = "FlightInfoTxtBox" readOnly onFocus = {()=>this.showHideChangePopUpjQ("show")}/ ><i className = "glyphicon glyphicon-menu-down flightpopIcon" style={divStyle} onClick={()=>this.popUpDisplay()} >< / i>
<div id = 'div_change_qty' name = 'div_change_qty' >
<table className='flightTableClass' width = '100%' height = '100%'>
    <tbody>
<tr><td width = '50%'><b>Cabin Class</b>< / td>
<td width = '20%'><button  type = "button" className = "hideBtn btn btn-default">
+
< / button>
< / td>

<td width = '20%'><button  type = "button"  className = "hideBtn btn btn-default">
-
< / button>
< / td>
<td width = '10%'>

<span className = "spanClose" onClick ={()=>this.popUpClose()}><b>X< / b>

< / span>< / td>
< / tr>
    
    
<tr >
    <td width = '50%'><span className="hoverClassFlightType" onClick ={()=>this.changeFlightClass('Economy')}>Economy</span>< / td>
        
    <td width = '50%'><span className="spanClassFlightType" onClick ={()=>this.changeFlightClass('Business')}>Business</span>< / td>
< / tr> 
    <tr >
    <td width = '50%'><span className="hoverClassFlightType" onClick ={()=>this.changeFlightClass('First')}>First</span>< / td>
< / tr> 
</ tbody>
< / table>
    
    
    <table className='flightTableClass' width = '100%' height = '100%'>
    <tbody>
<tr><td width = '50%'><b>Travellers</b>< / td>

< / tr>


<tr className = "borderclassName"><td width = '50%'>Adults <span className="ageSpan">  18-64</span>< / td>
<td width = '10%'><button type = "button" id = "addAdultBtn" onClick ={()=>this.addTraveller('addAdultBtn','adultTextBtn','removeAdultBtn')} className = "btn btn-default">
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "adultTextBtn" className="spanText">1

< / span>< / td>
<td width = '10%'><button type = "button" className = "btn btn-default" id = "removeAdultBtn" onClick ={()=>this.removeTraveller('removeAdultBtn','adultTextBtn','addAdultBtn')}>
-
< / button>    
< / td>
< / tr>

<tr className = "borderclassName"><td width = '50%'>Seniors <span className="ageSpan">  65+</span>< / td>
<td width = '10%'><button type = "button" id = "addSeniorBtn" onClick ={()=>this.addTraveller('addSeniorBtn','seniorTextBtn','removeSeniorBtn')} className = "btn btn-default">
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "seniorTextBtn" className="spanText">0

< / span>
< / td>
<td width = '10%'><button type = "button" id = "removeSeniorBtn" className = "btn btn-default" onClick = {()=>this.removeTraveller('removeSeniorBtn','seniorTextBtn','addSeniorBtn')}>
-
< / button>
< / td>
< / tr>

<tr className = "borderclassName"><td width = '50%'>Youth <span className="ageSpan">  12-17</span>< / td>
<td width = '10%'><button type = "button" id = "addYouthBtn" className = "btn btn-default" onClick = {()=>this.addTraveller('addYouthBtn','youthTextBtn','removeYouthBtn')}>
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "youthTextBtn" className="spanText" >
0
< / span>
</td>
<td width = '10%'><button type = "button" id = "removeYouthBtn" className = "btn btn-default" 
                      onClick ={()=>this.removeTraveller('removeYouthBtn','youthTextBtn','addYouthBtn')}>
-
< / button>
< / td>
< / tr>
    <tr ><td width = '50%'>Child <span className="ageSpan">  0-11</span>< / td>
<td width = '10%'><button type = "button" id = "addChildrenBtn" className = "btn btn-default" onClick = {()=>this.addTraveller('addChildrenBtn','childrenTextBtn','removeChildrenBtn')}>
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "childrenTextBtn"  >
0
< / span>
</td>
<td width = '10%'><button type = "button" id = "removeChildrenBtn" className = "btn btn-default" 
                      onClick ={()=>this.removeTraveller('removeChildrenBtn','childrenTextBtn','addChildrenBtn')}>
-
< / button>
< / td>
< / tr>
</ tbody>
< / table>
    
    
< / div>
< / div>
<div className = "col-sm-1 col-xs-1 hotelFields">
<button type = "button" className = "btn btn-warning form-control buttonField " onClick={this.props.clickSearchevent}>
<span className = "glyphicon glyphicon-search">< / span>
< / button>
< / div>
< / div>
< / div>
< / div>
   
                 );
}
                         
                 
            }  

export default withRouter(FlightSearchBox);

