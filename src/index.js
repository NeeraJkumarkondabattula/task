import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var data=["25","27","28","31","31","24","31","38","36","31","31","38","31","24","14","19","18","14","14","16","17","19","25","27","28","14","14","14","24","14","18","17","14","14","18","14","24","24","25","15","14","14","16","17","19","19","25","27","28","31","19","19","13","19","22","21","19","19","22","29","13","19","24","22","22","22","22","19","9","9","10","11","11"];
for(let i=0;i<data.length;i++){
    if(i>=18 && i<=29){
        document.querySelector("#box"+i).style.backgroundColor = "#FF708B";
    }
    document.querySelector("#box"+i).style.height = data[i]+"px";
}

var count1=0;
setInterval(()=>{
    if(count1>26){
        clearInterval();
    }else{
        count1+=1;
        document.querySelector("#percentage1").innerHTML=count1+"%";
    } 
},70)

var count2=0;
setInterval(()=>{
    if(count2>66){
        clearInterval();
    }else{
        count2+=1;
        document.querySelector("#percentage2").innerHTML=count2+"%";
    } 
},30);

var count3=30;
setInterval(()=>{
    if(count3==41){
        clearInterval();
    }else{
        count3+=1;
        document.querySelector("#allusers").innerHTML="2,431,3"+count3;
    }
},2000)


var overview=document.querySelector(".overview-content");
overview.style="scale:0";

document.querySelector(".overview").onclick=function(){
    overview.style="scale:1";
}
document.querySelector(".statistics").onclick=function(){
    overview.style="scale:0";
}
document.querySelector(".dashboard").onclick=function(){
    overview.style="scale:0";
}
document.querySelector(".analytics").onclick=function(){
   overview.style="scale:0";
}
