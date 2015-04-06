function leapYear(year) {
  return (year % 4 === 0) && (year % 400 === 0 || year % 100 != 0);
}

jQuery(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    result ? $(".not").empty() : $(".not").text("not");

    $("#result").show();
    event.preventDefault();
  });
});
