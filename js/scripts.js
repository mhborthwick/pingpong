// business logic
function list(num){
  if (num%15===0){
		return "<li>"+"pingpong"+"</li>";
  }
	else if(num%3===0){
		return "<li>"+"ping"+"</li>";
  }
	else if(num%5===0){
		return "<li>"+"pong"+"</li>";
  }
	else{
		return "<li>"+num+"</li>";
  }
};

// user logic
$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numInput").val());
    if (isNaN(numberInput)){
      alert("Try entering in a number instead! 😉");
    } else {
      $("ul#answers").children("li").remove();
      for(var i=1; i<=numberInput; i++){
      $("#answers").append(list(i));
      }
    };
  });
});
