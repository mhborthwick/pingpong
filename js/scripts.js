// business logic
function list(x){
  if (x%15===0){
		return "<li>"+"pingpong"+"</li>";
  }
	else if(x%3===0){
		return "<li>"+"ping"+"</li>";
  }
	else if(x%5===0){
		return "<li>"+"pong"+"</li>";
  }
	else{
		return "<li>"+x+"</li>";
  }
};

// user logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numInput").val());
    if (isNaN(numberInput)){
      alert("Try entering in a number instead! 😉");
    } else {
    for(var i=1; i<=numberInput; i++){
      $("#answers").append(list(i));
      }
    };
  });
});
