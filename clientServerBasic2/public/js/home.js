
  		function success(data) { 
  			alert(data.name);
  		}

  		let value = 0;
  		function requestClicked(){
  		  $.get("/request", {index:value},success);
        value++;
        if(value>3)
          value=0;
  		  return false;
  		}
      function changeClicked(){
        $.post("/change", {index:0, name : "Jack"},success);
        return false;
      }
  		
  		$(document).ready(function(){        
  		  $("#requestButton").click(requestClicked);
        $("#changeButton").click(changeClicked);
  		});  		

