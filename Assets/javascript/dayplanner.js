$(document).ready(function () {

    // var agenda = []
    // var blockHour = ""

    // Gets current time to display on web page
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, H:mm:ss');
    }
    setInterval(currentTime, 1000);

    //Updates rows to appropriate colors when time is reached
    var hoursUpdater = function () {
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr("data-hour"))
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
            // setInterval(hoursUpdater, 60000)

        })
    }
    // setInterval(hoursUpdater, 10000)

    function saveAgenda() {
        var agenda = []
        $('.description').each(function () {
            var hour = $(this).attr("data-task")
            var task = $.trim($(this).val())
            if (task != '') {
                // agenda = JSON.parse(localStorage.getItem('item:'))

                agenda.push({
                    hour: hour,
                    task: task,
                })

                localStorage.setItem('agendas:', JSON.stringify(agenda))

            }
        })

    }


    $(".saveBtn").click(saveAgenda)

    hoursUpdater()
})
