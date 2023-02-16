import logo from './Images/logo.png';
import search from './Images/search.png';
import admin from './Images/admin.png';
import settings from './Images/settings.png';
import chicago from './Images/chicago.png';
import berlin from './Images/berlin.png';
import shanghai from './Images/shanghai.png';
import giza from './Images/giza.png';
import queensland from './Images/queensland.png';
import manaus from './Images/manaus.png';
import earninglogo from './Images/earning-logo.png';
import saleslogo from './Images/sales-logo.png';
import purchaselogo from './Images/purchase-logo.png';
import hexmap from './Images/Hex map.png';
import './App.css';

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


export default function App() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="index.css" />
        <title>Wasseerstoff-Front-end-Developer-Task</title>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <div className="logo-img"><img src={logo} alt="" /></div>
              <div className="logo-text">ORION</div>
            </div>
            <div className="search"><input type="text" /><img src={search} alt="" /></div>
            <div className="options">
              <div className="statistics"><a href="#">Statistics</a></div>
              <div className="overview"><a href="#">Overview</a></div>
              <div className="dashboard"><a href="#">Dashboard</a></div>
              <div className="analytics"><a href="#">Analytics</a></div>
            </div>
            <div className="nav-logo">
              <div className="admin"><img src={admin} alt="" /></div>
              <div className="setting"><img src={settings} alt="" /></div>
            </div>
          </div>
          <div className="mainbody">
            <div className="left-side">
              <div className="allusers">
                <div className="allusers-text">All users</div>
                <div className="detail">DETAIL</div>
                <div className="more"><i className="fa-sharp fa-solid fa-angle-right" /></div>
              </div>
              <div className="users" id="allusers">2,431,330</div>
              <div className="analysis-box">
                <div className="total-earning">
                  <div className="logo"><img src={earninglogo} alt="" /></div>
                  <div className="text">
                    <div className="uppertext">Total earning</div>
                    <div className="lowertext">540,549</div>
                  </div>
                </div>
                <div className="total-sales">
                  <div className="logo"><img src={saleslogo} alt="" style={{backgroundColor: '#66C8FF'}} /></div>
                  <div className="text">
                    <div className="uppertext">Sales</div>
                    <div className="lowertext">1,205,667</div>
                  </div>
                </div>
                <div className="total-purchase">
                  <div className="logo"><img src={purchaselogo} alt="" style={{backgroundColor: '#FF9066'}} /></div>
                  <div className="text">
                    <div className="uppertext">Purchase</div>
                    <div className="lowertext">48,430,039</div>
                  </div>
                </div>
              </div>
              <div className="charts">
                <div className="chart">
                  <div className="activeusers">
                    <div className="percentage" id="percentage1" />
                    <svg xmlns="https://www.w3.org/2000/svg" id="circle1" version="1.1" width="160px" height="160px"> --&gt;
                      <circle cx={54} cy={54} r={42} id="per1" stroke-linearcap="round" />
                    </svg> 
                  </div>
                  <div className="content">
                    <div className="uppertext">92,980</div>
                    <div className="lowertext">Active users</div>
                  </div>
                </div>
                <div className="chart">
                  <div className="activeusers">
                    <div className="percentage" id="percentage2">67%</div>
                    <svg xmlns="https://www.w3.org/2000/svg" id="circle2" version="1.1" width="160px" height="160px">
                      <circle cx={54} cy={52} r={42} id="per2" stroke-linearcap="round" />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="uppertext">22,670</div>
                    <div className="lowertext">New users</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="chicago">
                <div className="icon"><img src={chicago} alt="" /></div>
                <div className="content">
                  <div className="text">Chicago</div>
                  <div className="population">98,320,300</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="berlin">
                <div className="icon"><img src={berlin} alt="" /></div>
                <div className="content">
                  <div className="text">Berlin</div>
                  <div className="population">76,541,106</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="manaus">
                <div className="icon"><img src={manaus} alt="" /></div>
                <div className="content">
                  <div className="text">Manaus</div>
                  <div className="population">12,320,300</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="giza">
                <div className="icon"><img src={giza} alt="" /></div>
                <div className="content">
                  <div className="text">Giza</div>
                  <div className="population">10,547,980</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="shanghai">
                <div className="icon"><img src={shanghai} alt="" /></div>
                <div className="content">
                  <div className="text">Shanghai</div>
                  <div className="population">239,570,110</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="queensland">
                <div className="icon"><img src={queensland} alt="" /></div>
                <div className="content">
                  <div className="text">Queensland</div>
                  <div className="population">6,097,321</div>
                </div>
                <i className="fa-sharp fa-solid fa-caret-down" />
              </div>
              <div className="overview-content">
                <div className="top-div">
                  <div className="salesfigures1">Sales Figures</div>
                  <div className="dot1" />
                  <div className="sales1">Sales</div>
                  <div className="dot2" />
                  <div className="users1">Users</div>
                  <div className="dot3" />
                  <div className="product1">Product</div>
                  <div className="dot4" />
                  <div className="team1">Team</div>
                </div>
                <div className="bottom-div1">
                  <div className="yscale">
                    <div className="1k">1K</div>
                    <div className={800}>800</div>
                    <div className={600}>600</div>
                    <div className={400}>400</div>
                    <div className={200}>200</div>
                    <div className={0} style={{justifyContent: 'flex-end'}}>0</div>
                  </div>
                  <div className="grap">
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div className="iline" />
                    <div id="c1" />
                    <div id="c2" />
                    <div id="c3" />
                    <div id="c4">$27632</div>
                    <div id="c5" />
                    <div id="c6">
                      <div className="sales">$27632</div>
                      <div className="month">Augest</div>
                    </div>
                    <div id="c7" />
                    <div id="c8" />
                    <div id="c9" />
                    <div id="c10">$27632</div>
                    <div id="c11" />
                    <div id="c12" />
                    <div id="c13" />
                    <div id="c14" />
                  </div>
                  <div className="xscale">
                    <div className="jan">Jan</div>
                    <div className="feb">Feb</div>
                    <div className="mar">Mar</div>
                    <div className="apr">Apr</div>
                    <div className="may">May</div>
                    <div className="jun">Jun</div>
                    <div className="jul">Jul</div>
                    <div className="aug">Aug</div>
                    <div className="sep">Sep</div>
                    <div className="oct">Oct</div>
                    <div className="nov">Nov</div>
                    <div className="dec">Dec</div>
                  </div>
                </div>
              </div>
              <img src={hexmap} alt="" id="hexmap" />
            </div>
          </div>
          <div className="timeline">
            <div className="salesfigures">
              <div className="text">Sales Figures</div>
              <div className="purchase">$10,430</div>
            </div>
            <div className="graph">
              <div className="graphs">
                <div id="box0" />
                <div id="box1" />
                <div id="box2" />
                <div id="box3" />
                <div id="box4" />
                <div id="box5" />
                <div id="box6" />
                <div id="box7" />
                <div id="box8" />
                <div id="box9" />
                <div id="box10" />
                <div id="box11" />
                <div id="box12" />
                <div id="box13" />
                <div id="box14" />
                <div id="box15" />
                <div id="box16" />
                <div id="box17" />
                <div id="box18" />
                <div id="box19" />
                <div id="box20" />
                <div id="box21" />
                <div id="box22" />
                <div id="box23" />
                <div id="box24" />
                <div id="box25" />
                <div id="box26" />
                <div id="box27" />
                <div id="box28" />
                <div id="box29" />
                <div id="box30" />
                <div id="box31" />
                <div id="box32" />
                <div id="box33" />
                <div id="box34" />
                <div id="box35" />
                <div id="box36" />
                <div id="box37" />
                <div id="box38" />
                <div id="box39" />
                <div id="box40" />
                <div id="box41" />
                <div id="box42" />
                <div id="box43" />
                <div id="box44" />
                <div id="box45" />
                <div id="box46" />
                <div id="box47" />
                <div id="box48" />
                <div id="box49" />
                <div id="box50" />
                <div id="box51" />
                <div id="box52" />
                <div id="box53" />
                <div id="box54" />
                <div id="box55" />
                <div id="box56" />
                <div id="box57" />
                <div id="box58" />
                <div id="box59" />
                <div id="box60" />
                <div id="box61" />
                <div id="box62" />
                <div id="box63" />
                <div id="box64" />
                <div id="box65" />
                <div id="box66" />
                <div id="box67" />
                <div id="box68" />
                <div id="box69" />
                <div id="box70" />
                <div id="box71" />
                <div id="box72" />
              </div>
              <div className="line" />
            </div>
          </div>
          <div className="footer">
            <div className="company">Orion data visualisation</div>
            <div className="year">2023</div>
          </div>
        </div>
      </div>
    );
  };




