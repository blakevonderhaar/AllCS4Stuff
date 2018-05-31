
  		function success(data) { 
        $("#message").html(data.tell1);
        $("#pickNum").html(data.tell2);
  		}

  		function requestClicked(){
  		  $.get("/request", {index: parseInt($("#textIndex").val())},success);
  		  return false;
  		}
      
  		$(document).ready(function(){        
  		  $("#changeButton").click(requestClicked);
  		});  		

