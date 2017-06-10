window.onload=function(){

$(document).ready(function(){
  //jquery instead of vanilla DOM manipulation for quick adding and removing of classes
    $(".st").click(function(){
        $("#c").removeClass("clock");
      $("#c").addClass("clockE");
    });
  $(".so").click(function(){
        $("#c").removeClass("clockE");
      $("#c").addClass("clock");
    });
});

//Declare all variables at top
var done = false;
var btc = 5;
var sec = 12;
var min = 25;


//Using vanilla DOM manipulation to grab button IDs and add event listener.
//Buttons are for adding and removing time from break
var mb = document.getElementById('minusBreak');
mb.addEventListener("click", myFunctionmb);

function myFunctionmb() {
  if(btc === 5){
    
    mb.style.visibility = "hidden";

    
  } else {
  btc -= 5;
    var bt = document.getElementById('bt');
  bt.innerHTML = btc;
}
}

var pb = document.getElementById('plusBreak');
pb.addEventListener("click", myFunctionpb);

function myFunctionpb() {
  if(btc === 5){
    mb.style.visibility = "visible";
      btc += 5;
    var bt = document.getElementById('bt');
  bt.innerHTML = btc;
  }else{
    btc += 5;
    var bt = document.getElementById('bt');
  bt.innerHTML = btc;
  
  }
}

//Buttons are for adding and removing time from timer

var mc = document.getElementById('minusCount');
mc.addEventListener("click", myFunctionmc);

function myFunctionmc() {
  
  if(min < 5){
    
    mc.style.visibility = "hidden";
var ct = document.getElementById('count');
  ct.innerHTML = 0;
    
  } else {
    min -= 5;
    var ct = document.getElementById('count');
  ct.innerHTML = min;
    document.getElementById("p5").innerHTML = min;
  }
}
var mp = document.getElementById('plusCount');
mp.addEventListener("click", myFunctionmp);

function myFunctionmp() {
 if(min === 5){
   mc.style.visibility = "visible";
    min = 10;
    var ct = document.getElementById('count');
  ct.innerHTML = min;
 } else{
      min += 5;
    var ct = document.getElementById('count');
  ct.innerHTML = min;
    document.getElementById("p5").innerHTML = min;
}
}

// First countdown function timer for study-time. 
var st = document.getElementById('start');
st.addEventListener("click", studyStart);
//Function for ending the timer
var en = document.getElementById('end');
en.addEventListener("click", endTimer);



// studyTimer function that ets started by the setInterval
function studyTimer(){
  if(sec === 0){
    min = min - 1;
  sec = 60;
  document.getElementById("p5").innerHTML = min + ":" + sec;
      
  }else{ 
    if(sec <= 10){
   sec = sec - 1;
  document.getElementById("p5").innerHTML = min + ":" + "0"+sec;
 } else{
    sec = sec - 1;
  document.getElementById("p5").innerHTML = min + ":" + sec;
   
 }
 }
};
/*
function studyTimerTwo() {
 if(sec <= 10){
   sec = sec - 1;
  document.getElementById("p5").innerHTML = min + ":" + "0"+sec;
 } else{
    sec = sec - 1;
  document.getElementById("p5").innerHTML = min + ":" + sec;
   
 }
};
*/

//Start button triggers  studyStart() which runs  a setInterval for the studyTimer().
//When the timmer reaches zero it triggers the clearInterval and starts the  setInterval for the breakTimer() function
//
 function studyStart(){
   done = false;
 var studyStartInterval = setInterval(function(){ studyTimer();
                                
     if(done === true){
    
    var timeT = document.getElementById('p5');
  timeT.innerHTML = 'o';
       clearInterval(studyStartInterval);
    
       
     }
   else if(min === 0 && sec === 0) {
     
    
     clearInterval(studyStartInterval);
   breakStart();
 }
   }, 5);
 };

// Interval function that starts the break timer
 function breakStart(){
   done = false;
 var breakStartInterval = setInterval(function(){ breakTimer();  
           if(done === true){
       clearInterval(breakStartInterval);
    
     }                      
 else if(btc === 0 && sec === 12) {
     clearInterval(breakStartInterval);
 }
   }, 5);                     
};
//break timer function
function breakTimer(){
   var timeT = document.getElementById('p5');
  timeT.innerHTML = btc + ":" + sec;
  if(sec === 0){
    btc = btc - 1;
  sec = 60;
  document.getElementById("p5").innerHTML = min + ":" + sec;
      }else{ 
   if(sec <= 10){
   sec = sec - 1;
  document.getElementById("p5").innerHTML = btc + ":" + "0"+sec;
 } else{
    sec = sec - 1;
  document.getElementById("p5").innerHTML = btc + ":" + sec;
 }
  }
};
/*
function breakTimerTwo() {
 if(sec <= 10){
   sec = sec - 1;
  document.getElementById("p5").innerHTML = btc + ":" + "0"+sec;
 } else{
    sec = sec - 1;
  document.getElementById("p5").innerHTML = btc + ":" + sec;
 }
};
*/

// had trouble clearing the intervials so I created this function that gives j the value of 1. If j is 1 the intervials end.
function endTimer(){
   var wrongSound = document.getElementById("blueSound");
wrongSound.play();
var timeT = document.getElementById('p5');
  timeT.innerHTML = 0+':'+00;
  min = 5;
  var ct = document.getElementById('count');
  ct.innerHTML = min;
 // when done is true the studyTimer and/or breaktimer functin will stop
 done = true;
 // console.log(j);
};



}


