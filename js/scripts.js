// business logic
function list(a){
  if (a%15===0){
		return "pingpong";
		}
	else if(a%3===0){
		return "ping";
		}
	else if(a%5===0){
		return "pong";
		}
	else{
		return a;
		}
};

// user logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numInput").val());
    for(var i=1; i<=numberInput; i++){
      $("#answers").append(list(i));
    };
  });
});
