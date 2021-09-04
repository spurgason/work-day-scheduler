// Displays the current date using moment.js
let today = moment().format('MMM Do YYYY');
$('#currentDay').html(today)

// Sets variable for current time
let currentHour = moment().hour();
console.log(currentHour);

// Local Storage Save 
$('.saveBtn').on('click', function(){

    let task = $(this).siblings("#textBlock").val();
    let hour = $(this).parent().attr("id");

    localStorage.setItem(hour, task)
})

// Gets local storage through key displaying the tasks discription
$("#hour8AM #textBlock").val(localStorage.getItem("hour8AM"));
$("#hour9AM #textBlock").val(localStorage.getItem("hour9AM"));
$("#hour10AM #textBlock").val(localStorage.getItem("hour10AM"));
$("#hour11AM #textBlock").val(localStorage.getItem("hour11AM"));
$("#hour12PM #textBlock").val(localStorage.getItem("hour12PM"));
$("#hour1PM #textBlock").val(localStorage.getItem("hour1PM"));
$("#hour2PM #textBlock").val(localStorage.getItem("hour2PM"));
$("#hour3PM #textBlock").val(localStorage.getItem("hour3PM"));
$("#hour4PM #textBlock").val(localStorage.getItem("hour4PM"));
$("#hour5PM #textBlock").val(localStorage.getItem("hour5PM"));




// Creates values for each time slot
const hour8 = document.getElementById('hour-8').value = 8
const hour9 = document.getElementById('hour-9').value = 9
const hour10 = document.getElementById('hour-10').value = 10
const hour11 = document.getElementById('hour-11').value = 11
const hour12 = document.getElementById('hour-12').value = 12
const hour1 = document.getElementById('hour-1').value = 13
const hour2 = document.getElementById('hour-2').value = 14
const hour3 = document.getElementById('hour-3').value = 15
const hour4 = document.getElementById('hour-4').value = 16
const hour5 = document.getElementById('hour-5').value = 17

// Stored values for time slots
// let hourBlocks = [
//     hour8,
//     hour9,
//     hour10,
//     hour11,
//     hour12,
//     hour1,
//     hour2,
//     hour3,
//     hour4,
//     hour5]

// Runs function to check if it is past, present, or future
function pastToFuture() {


    $('.time-block').each( function(){
        var hourBlocks = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlocks < currentHour) {
            $(this).addClass('past')
            $(this).removeClass('present')
            $(this).removeClass('future')
        } else if (hourBlocks === currentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
            $(this).removeClass('future')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }


    })

    // WHY DOES THIS FOR LOOP NOT WORK?
    // For loop to check each time in array
    // for (let index = 0; index < hourBlocks.length; index++) {

        // Sets the background color class for past, present, or future
        // if (hourBlocks < currentHour) {
        //     $('.description').addClass('past')
        //     $('.description').removeClass('present')
        //     $('.description').removeClass('future')
        // } else if (hourBlocks === currentHour) {
        //     $('.description').removeClass('past')
        //     $('.description').addClass('present')
        //     $('.description').removeClass('future')
        // } else {
        //     $('.description').removeClass('past')
        //     $('.description').removeClass('present')
        //     $('.description').addClass('future')
        // }
        
    // }
    

} pastToFuture();

