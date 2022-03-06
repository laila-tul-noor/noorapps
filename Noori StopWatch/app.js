var hour = 0 ;
var min = 0 ;
var sec = 0 ;
var msec = 0 ;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval = null;
var dad = "stopped";

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
    else if(min >= 60){
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
    }
}

function startStop(){
    if(dad === "stopped" ){
     interval = window.setInterval(timer,10);
     document.getElementById("startStop").innerHTML = "STOP";
     dad = "started";
 }
 else{
     window.clearInterval(interval);
     document.getElementById("startStop").innerHTML = "START";
      dad = "stopped";
 }
 }
function reset(){
    var hour = 0 ;
    var min = 0 ;
    var sec = 0 ;
    var msec = 0 ;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
    clearInterval(interval);
}