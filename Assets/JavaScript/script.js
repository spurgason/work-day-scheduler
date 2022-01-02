// Displays the current date using moment.js
let today = moment().format("MMM Do YYYY");
$("#currentDay").html(today);

// Local Storage Save
$(".saveBtn").on("click", function () {
  let task = $(this).siblings("#textBlock").val();
  let hour = $(this).parent().attr("id");

  localStorage.setItem(hour, task);
});

// Runs function to check if it is past, present, or future
function pastToFuture() {
  // Sets variable for current time
  let currentHour = moment().hours();
  console.log(currentHour);

  $(".time-block").each(function () {
    var hourBlocks = parseInt($(this).attr("id").split("hour")[1]);

    if (hourBlocks < currentHour) {
      $(this).addClass("past");
    } else if (hourBlocks == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

pastToFuture();

// Gets local storage through key displaying the tasks description
$("#hour8 #textBlock").val(localStorage.getItem("hour8"));
$("#hour9 #textBlock").val(localStorage.getItem("hour9"));
$("#hour10 #textBlock").val(localStorage.getItem("hour10"));
$("#hour11 #textBlock").val(localStorage.getItem("hour11"));
$("#hour12 #textBlock").val(localStorage.getItem("hour12"));
$("#hour13 #textBlock").val(localStorage.getItem("hour13"));
$("#hour14 #textBlock").val(localStorage.getItem("hour14"));
$("#hour15 #textBlock").val(localStorage.getItem("hour15"));
$("#hour16 #textBlock").val(localStorage.getItem("hour16"));
$("#hour17 #textBlock").val(localStorage.getItem("hour17"));
