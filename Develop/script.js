// Displays the current date using moment.js
const todaysDate = document.getElementById('currentDay')
let today = moment().format('MMM Do YYYY')
todaysDate.innerHTML = "Today's date is " + today

