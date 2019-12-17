$(document).ready(function () {

    // Get Current Time and Updates Page
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    setInterval(currentTime, 1000);

    currentTime
})

