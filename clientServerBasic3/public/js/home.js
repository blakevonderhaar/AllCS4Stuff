
  		function success(data) { 
  			alert(data.name);
  		}
      function success2(data) { 
        $("#textName").val(data.name);
        alert(data.name);
      }


  		function requestClicked(){
  		  $.get("/request", {index:parseInt($("#textIndex").val())},success2);
  		  return false;
  		}
      function changeClicked(){
        $.post("/change", {index: parseInt($("#textIndex").val()), name : $("#textName").val()},success);
        return false;
      }
  		
  		$(document).ready(function(){        
  		  $("#requestButton").click(requestClicked);
        $("#changeButton").click(changeClicked);
  		});  		

