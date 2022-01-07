var hour9 = $("#hour-9"); 
var hour10 = d("#hour-10"); 
var hour11 = d("#hour-11"); 
var hour12 = document.getElementById("#hour-12"); 
var hour13 = document.getElementById("#hour-13"); 
var hour14 = document.getElementById("#hour-14"); 
var hour15 = document.getElementById("#hour-15"); 
var hour16 = document.getElementById("#hour-16"); 
var hour17 = document.getElementById("#hour-17"); 
var past = document.querySelector(".past"); 
var present = document.querySelector(".present"); 
var furture = document.querySelector(".future"); 
var description = document.querySelector(".description")


var saveBtnEl = $(".saveBtn");

var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);



localStorage.setItem('hour-9', '');




//Add an event to run function when they click save button in the hour 9 div
// Use DOM teaverseal to get to textarea, Use varable to assign
// Get the vlue of the texxt area and ssign to varable 
// write that vlue with the key hour-9 in localStorage 

function printTextHour() {
    var task = localStorage.getItem("task")
    if (task === null) {
        return;
    }
}










 








// use moment for the current hour. 
// use IF statements to say which is the current hour, and for which color to go for. 



