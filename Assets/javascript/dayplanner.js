$(document).ready(function () {
    var agenda = ""

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

            if (blockHour < currentHour) {
                $(this).addClass("past");
            }

            else if (blockHour > currentHour) {
                $(this).addClass("future");

            }

            else {
                $(this).addClass("present");
            }

        })
    }
    setInterval(hoursUpdater, 10000)

    //saves agenda items to local storage as object with hour and task key values
    function saveAgenda() {
        agenda = []
        $('.description').each(function () {
            var hour = $(this).attr("data-task")
            var task = $.trim($(this).val())

            agenda.push({
                hour: hour,
                task: task,
            })

            var setagenda = localStorage.setItem('agendaItems', JSON.stringify(agenda))

        })

    }

    //retrieves agenda items from local storage
    function loadAgenda() {
        i = 0
        $('.description').each(function () {
            var readagenda = JSON.parse(localStorage.getItem('agendaItems'))
            var hour = $(this).attr("data-task")

            if (readagenda[i].hour === hour) {
                $(this).val(readagenda[i].task)
            }

            else {
                return ""
            }

            i++
        })
    }


    // function clearStorage() {
    //     if(){
    //         localStorage.clear()
    //     }

    // }




    $(".saveBtn").click(saveAgenda)

    hoursUpdater()
    loadAgenda()

    console.log("executed")
});
