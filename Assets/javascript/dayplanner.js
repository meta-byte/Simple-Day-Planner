$(document).ready(function () {

    // Gets current time to display on web page
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, H:mm:ss');
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    setInterval(currentTime, 1000);

    //Updates rows to appropriate colors when time is reached
    function hoursUpdater() {

        var currentHour = moment().hours();
        $('.time-block').each(function () {

            var blockHour = parseInt($(this).attr("data-hour"))
            // var blockHour = 13

            console.log(blockHour);
            console.log(currentHour);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                console.log("Past");
            }
            else if (blockHour > currentHour) {
                $(this).addClass("future");
                console.log("Future");

            }
            else {
                $(this).addClass("present");
                console.log("Present");
            }

            console.log(this)
            setInterval(hoursUpdater, 60000)
        })
    }

    hoursUpdater()
})
