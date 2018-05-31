
		alert("working");
		
		function success(data) { 

  		function request2Clicked(){
  		  $.get("/another", {index: parseInt($("#smallNum").val()), index2: parseInt($("#bigNum").val())},success);
  		  return false;
  		}
      
  		$(document).ready(function(){        
  		  $("#changeValue").click(request2Clicked);
  		}); 