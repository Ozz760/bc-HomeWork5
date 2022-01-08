var hour9 = $("#hour-9"); 
var hour10 = $("#hour-10"); 
var hour11 = $("#hour-11"); 
var hour12 = $("#hour-12"); 
var hour13 = $("#hour-13"); 
var hour14 = $("#hour-14"); 
var hour15 = $("#hour-15"); 
var hour16 = $("#hour-16"); 
var hour17 = $("#hour-17"); 
var saveBtnEl = $(".saveBtn");
var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);



saveBtnEl.on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
    console.log(time, text);

}); 



















