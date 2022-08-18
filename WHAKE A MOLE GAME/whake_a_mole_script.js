var h1=document.querySelector("h1");
var startermole=document.querySelector("#mole");
var starterdirt=document.querySelector("#mud");
var startbtn=document.querySelector("#start");
var dirts=document.querySelectorAll(".dirt");
var points=document.querySelectorAll(".points");
var mole=document.querySelectorAll(".mole");
var currentPoint = document.getElementById('currentPoint')

function start(){
    h1.style.visibility="hidden";
    startermole.style.visibility="hidden";
    starterdirt.style.visibility="hidden";
    startbtn.style.visibility="hidden";
    
    for(var i=0;i<2;i++)points[i].style.visibility="visible";
    for(var i=0;i<6;i++)dirts[i].style.visibility="visible";
    for(var i=0;i<6;i++){
        dirts[i].style.visibility="visible";
     }
     var inc=0;
     setInterval(moleVisible,1000);          
    }
         function randomNumber(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
         }
         function moleVisible(){
            var b=randomNumber(1,6);
            mole[b-1].style.visibility="visible";
            mole[b-1].onclick = updatePoints;
            setTimeout(()=>{for(var i=0;i<6;i++){
                mole[i].style.visibility="hidden";
            }},900)
         }
         var inc=0;
         function updatePoints(){
        inc++;
        currentPoint.textContent=inc;
        console.log(inc);
         }
/*
var crr_pts=0;
var h1=document.querySelector("h1");
var start_mole=document.querySelector("#mole");
var dirt=document.querySelector("#mud");
var start_btn=document.querySelector("#start");
var dirts=document.querySelectorAll(".dirt");
var points=document.querySelectorAll(".points");
var mole=document.querySelectorAll(".mole");

function start(){
    h1.style.visibility="hidden";
    start_mole.style.visibility="hidden";
    dirt.style.visibility="hidden";
    start_btn.style.visibility="hidden";
    for(var i=0;i<2;i++)points[i].style.visibility="visible";
    for(var i=0;i<6;i++)dirts[i].style.visibility="visible";
var func=setInterval(function(){
    var x=Math.floor(Math.random() * 6);
    mole[x].style.visibility="visible";
    
    var fun = setTimeout(function (){
    mole[x].style.visibility="hidden";},600);   
}
,900);
}
function pts(){
    document.getElementById("currentPoint").innerHTML=    crr_pts++;
    console.log(crr_pts) 
}
*/


