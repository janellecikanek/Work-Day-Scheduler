var jumbotron = $(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var description = $(".description");
var timeBlock = $(".time-block");
var row = $(".row");
var hour = $(".hour");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var saveBtn = $(".saveBtn");

// The current day is displayed at the top of the calendar
function init() {
  var todaysDate = moment().format("MMM Do, YYYY");
  $("#currentDay").text(todaysDate);

//   time block is color-coded to indicate whether it is in the past, present, or future
  function colorBlock() {
    var currentTime = moment().hours();
    var timeBlock = $(".time-block");
    timeBlock.each(function () {
      var hour = parseInt($(this).attr("id"));3
      if (hour === currentTime) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "present col-sm-10 description");
      } else if (hour > currentTime) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "future col-sm-10 description");
      } else {
        $(this)
          .children(".col-sm-10")
          .attr("class", "past col-sm-10 description");
      }
    });
  }

  colorBlock();

//   save button for that time block, the text for that event is saved in local storage
  saveBtn.on("click", function (event) {
    event.preventDefault();
    var value = $(this).siblings(".col-sm-10").val().replace(key);
    var key = $(this).parent().attr("id");

    localStorage.setItem(key, JSON.stringify(value));
  });

  $("#9 textarea").val(JSON.parse(localStorage.getItem("9")));
  $("#10 textarea").val(JSON.parse(localStorage.getItem("10")));
  $("#11 textarea").val(JSON.parse(localStorage.getItem("11")));
  $("#12 textarea").val(JSON.parse(localStorage.getItem("12")));
  $("#13 textarea").val(JSON.parse(localStorage.getItem("13")));
  $("#14 textarea").val(JSON.parse(localStorage.getItem("14")));
  $("#15 textarea").val(JSON.parse(localStorage.getItem("15")));
  $("#16 textarea").val(JSON.parse(localStorage.getItem("16")));
  $("#17 textarea").val(JSON.parse(localStorage.getItem("17")));
}

init();
