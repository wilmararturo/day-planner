
$(document).ready(function () {
    var mainContainer = $(".container");
    var hourDivEl = $("<div>").addClass("row time-block");
    var hourLabelEl = $("<div>").addClass("col-md-1 hour");
    var hourDescriptionEl = $("<div>").addClass("col-md-10 description");
    var saveButtonEl = $("<button>").addClass("btn saveBtn col-md-1");



    function refreshDay() {

        // loop troush the hours of the day to create grid
        for (i = 8; i < 19; i++) {
            var hourDivID = "hour-" + i;
            hourLabelEl.text(`${i}`);
            hourDivEl.attr("id", hourDivID).append(hourLabelEl, hourDescriptionEl, saveButtonEl);
            mainContainer.append(hourDivEl.clone());
        }
    }

    $(".saveBtn").on("click", function () {
        console.log("Button Click");
        refreshDay();
    });
    refreshDay();

});