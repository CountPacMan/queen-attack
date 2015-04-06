function queenAttack(queenPos, otherPos) {
  // row is 0 element of array, column is 1
  return (queenPos[0] === otherPos[0]) || (queenPos[1] === otherPos[1]) || (Math.abs(queenPos[0] - otherPos[0]) === Math.abs(queenPos[1] - otherPos[1]));
}

function isValid(element) {
  return element > 0 && element < 9;
}

jQuery(document).ready(function() {

  $("#queen-attack").submit(function(event) {
    $("#error").empty();
    var queen_row = parseInt($("#queen_row").val());
    var queen_col = parseInt($("#queen_col").val());
    var attack_row = parseInt($("#attack_row").val());
    var attack_col = parseInt($("#attack_col").val());

    var queenPos = [queen_row, queen_col];
    var otherPos = [attack_row, attack_col];

    if (!queenPos.every(isValid)) {
      $("#error").prepend("<p>Queen position must be within 1 and 8</p>");
    }
    if (!otherPos.every(isValid)) {
      $("#error").prepend("<p>Attack position must be within 1 and 8</p>");
    }

    if (queenPos.every(isValid) && otherPos.every(isValid)) {

    } else {

    }

    event.preventDefault();
  });


});
