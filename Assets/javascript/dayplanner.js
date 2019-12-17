$(document).ready(function () {

    var hoursArr = ["8:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]


    // Get Current Time and Updates Page
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, H:mm:ss');
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    setInterval(currentTime, 1000);

    function plannerRows() {
        for (i = 0; i < hoursArr.length; i++) {
            hourRow = $("<div>")
            hourRow.attr("class", "timeRow future")
            $("#agenda-box").append(hourRow)
        }
    }

    plannerRows();
})

