import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";



const name="Hello,";

let greeting=" ";
let oHours=new Date();
oHours=oHours.getHours();

if(oHours>=1 && oHours<12){
  greeting="Good Morning";
}

else if(oHours>=12 && oHours<16){
  greeting="Good Afternoon";

} 

else if(oHours>=4 && oHours<19){
  greeting="Good Evening";
}

else{
  greeting="Good Night";
}

let curDate=new Date().toLocaleDateString();
let curTime=new Date().toLocaleTimeString();


ReactDOM.render(
  <>
  <div className="container">
<div className="greeting_text">{name}{greeting}</div>
<div className="wrapper"></div>
<div className="time">{curTime}</div>
<div className="date">{curDate}</div>
</div><App /></>, document.getElementById("root"));
