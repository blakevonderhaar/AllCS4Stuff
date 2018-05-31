

      function successModify(data) { 
	    }

  		function modifyClicked(){
  		  $.post("/modify2",{minNum:$("#minNum").val(),maxNum:$("#maxNum").val()},successModify);
  		  return false;
  		}


  		$(document).ready(function(){      
  		  $("#modifyButton").click(modifyClicked);
  		});  		
  
  
