
$(document).ready(function () {
    var mainContainer = $(".container");
    var currentDayEl = $("#currentDay");
    var hourDivEl = $("<div>").addClass("row time-block");
    var hourLabelEl = $("<div>").addClass("col-md-1 hour");
    var hourDescriptionEl = $("<textarea>").addClass("col-md-10 description");
    var saveButtonEl = $("<button>").addClass("btn saveBtn col-md-1");

    var jumbotronDate = moment().format("dddd DD MMMM, YYYY");

    var nowHour = moment().hour()


    function refreshDay() {

        mainContainer.empty();
        console.log("Current hour: " + nowHour);

        // loop troush the hours of the day to create grid
        for (i = 8; i < 19; i++) {
            var myHour = moment().hour(i).format("HH:00");
            var hourDivID = "hour-" + myHour;
            hourLabelEl.text(`${myHour}`);
            hourDivEl.attr("id", hourDivID).append(hourLabelEl, hourDescriptionEl, saveButtonEl);
            if (i < nowHour) {
                hourDivEl.attr("class", "row time-block past");
            } else if (nowHour === i) {
                hourDivEl.attr("class", "row time-block present");
            } else {
                hourDivEl.attr("class", "row time-block future");
            }
            mainContainer.append(hourDivEl.clone());

        }
    }


    $(document).on("click", ".saveBtn", function () {
        console.log($(this));
        refreshDay();


    });

    currentDayEl.text(jumbotronDate);

    refreshDay();

});