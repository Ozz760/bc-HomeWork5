var hour9 = document.getElementById("#hour-9"); 
var hour10 = document.getElementById("#hour-10"); 
var hour11 = document.getElementById("#hour-11"); 
var hour12 = document.getElementById("#hour-12"); 
var hour13 = document.getElementById("#hour-13"); 
var hour14 = document.getElementById("#hour-14"); 
var hour15 = document.getElementById("#hour-15"); 
var hour16 = document.getElementById("#hour-16"); 
var hour17 = document.getElementById("#hour-17"); 

var saveBtnEl = $(".saveBtn");

if (localStorage.getItem("hour-9") === null) {
    var hour9 = ""; 
} else {
    var hour9 = localStorage.getItem("hour9");
}

function saveInput () {
    hour9 = $("#hour-9").children("textarea").val();
}




 
var time = moment().format("MMM Do, YYYY", "hh:mm:ss");
$("#currentDay").text(time);







// use the div to identify which hour where at. 
// use moment for the current hour. 
// use IF statements to say which is the current hour, and for which color to go for. 
