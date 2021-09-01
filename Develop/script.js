// Displays the current date using moment.js
let today = moment().format('MMM Do YYYY');
$('#currentDay').html(today)

// Sets variable for current time
let currentHour = moment().hour();
console.log(currentHour);

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
let hourBlocks = [
    hour8,
    hour9,
    hour10,
    hour11,
    hour12,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5]



// Runs function to check if it is past, present, or future
function pastToFuture() {

    // For loop to check each time in array
   hourBlocks.forEach(function(checkTime){

    // Sets the background color class for past, present, or future
    if (hourBlocks < currentHour) {
        $('#textBlock').addClass('past')
        $('#textBlock').removeClass('present')
        $('#textBlock').removeClass('future')
    } else if (hourBlocks == currentHour) {
        $('#textBlock').removeClass('past')
        $('#textBlock').addClass('present')
        $('#textBlock').removeClass('future')
    } else {
        $('#textBlock').removeClass('past')
        $('#textBlock').removeClass('present')
        $('#textBlock').addClass('future')
    } 
    console.log(checkTime);
   })
    
} pastToFuture();