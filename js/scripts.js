$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var numberInput = $("input#numInput").val();

    $("#answers").text(numberInput);


    $(".answersContainer").show();

    event.preventDefault();
  });
});
