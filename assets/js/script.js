
$(document).ready(function () {
    var mainContainer = $(".container");
    var currentDayEl = $("#currentDay");
    var hourDivEl = $("<div>").addClass("row time-block");
    var hourLabelEl = $("<div>").addClass("col-md-1 hour");
    var hourDescriptionEl = $("<textarea>").addClass("col-md-10 description");
    var saveButtonIcon = $("<span>").addClass("far fa-save");
    var saveButtonEl = $("<button>").addClass("btn saveBtn col-md-1").html(saveButtonIcon);

    var jumbotronDate = moment().format("dddd DD MMMM, YYYY");

    var nowHour = moment().hour()

    function saveHourEntryText(descriptionEL) {
        var hourEntryText = descriptionEL.val().trim();
        var hourDescriptionID = descriptionEL.attr("id");
        localStorage.setItem(hourDescriptionID, hourEntryText);
        refreshDay();
    }

    function getHourEntryText(hourDescriptionID) {
        var hourEntryText = localStorage.getItem(hourDescriptionID) || "";
        return hourEntryText;


    }

    function refreshDay() {

        mainContainer.empty();

        // loop troush the hours of the day to create grid
        for (i = 8; i < 19; i++) {
            var myHour = moment().hour(i).format("HH:00");
            var hourDivID = "hour-" + moment().hour(i).format("HH");
            var hourDescriptionID = "text-" + hourDivID;
            var buttonID = "button-" + hourDivID;
            hourLabelEl.text(`${myHour}`);
            hourEntryText = getHourEntryText(hourDescriptionID);
            hourDescriptionEl.attr("id", hourDescriptionID).text(hourEntryText);
            saveButtonEl.attr("id", buttonID);
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
        var descriptionId = $(this).attr("id").replace("button", "text");
        var descriptionEL = $(`#${descriptionId}`)
        saveHourEntryText(descriptionEL);


    });

    currentDayEl.text(jumbotronDate);

    refreshDay();

});