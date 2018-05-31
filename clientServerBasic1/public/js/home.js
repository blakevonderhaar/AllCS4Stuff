
  		function success(data) { 
  			alert(data.name);
  		}
  		
  		function requestClicked(){
  		  $.get("/request", {index:1},success);
  		  return false;
  		}
  		
  		$(document).ready(function(){        
  		  $("#requestButton").click(requestClicked);
  		});  		

