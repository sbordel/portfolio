// SCHEDULE: BUTTON SWITCH
$(function () {
  $(".schedule-button").click(function () {
    $(".schedule-button").css({'background-color': 'white', 'color': 'black'});
    $(this).css({'background-color': 'black', 'color': 'white'});
  });
});