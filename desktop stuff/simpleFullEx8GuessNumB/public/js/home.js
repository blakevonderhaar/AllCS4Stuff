

      function successModify(data) { 
	 }

      function successRange(data) {
		let displayInfo = "Enter a value from " + data.minVal + " to " + data.maxVal;
  		  $("#displayRange").html(displayInfo);
	 } 

      function successRequest(data) { 

        if (data.value == -1)
          $("#list").append("<li>Pick A Bigger Number</li>");
        else if (data.value == 1)
          $("#list").append("<li>Pick A Smaller Number</li>");
        else if (data.value == 0)
          $("#list").append("<li>You Got It</li>");

      }

  		function requestClicked(){
  		  $.get("/request",{guessNum:$("#guessNum").val()},successRequest);
  		  return false;
  		}



  		$(document).ready(function(){      
  			$("#guessNum").keydown( function( event ) {
  			    if ( event.which === 13 ) {
  			        // Do something
  			    	requestClicked();
  			        // Disable sending the related form
  			        event.preventDefault();
  			        return false;
  			    }
  			});

  		  $.get("/range",successRange);
			
  
  		  $("#requestButton").click(requestClicked);
  	

  		});  		
  
  
