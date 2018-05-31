
  		function success(data) { 
  		}
      function success2(data) { 
      }
      
  		function requestClicked(){
  		  $.get("/request", {topic: parseInt($("#topic").val()), comment: parseInt($("#comment").val())},success);
  		  return false;
  		}

      function anotherClicked(){
        $.get("/another",success2);
        return false;
      }
      
  		$(document).ready(function(){        
  		  $("#send").click(requestClicked);
        $("#show").click(anotherClicked);
  		});  		

