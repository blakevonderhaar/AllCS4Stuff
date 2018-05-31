  		function successRequest(data) { 
        if (!data)
            alert("ERROR data");
        else
          	$("#name").val(data.name);				
  		}
  		
  		function successChange(data) { 
        if (!data)
          alert("ERROR");
        else
          alert("CHANGE VALID");
  		}

  		function requestClicked(){
         //$.get("/request?index=3",successRequest);  //below line is also a query.
        //$.get("/request", {index:$("#index").val()},successRequest);

        $.ajax({
          url : "/request",
          type: "GET",
          data: {index:$("#index").val()},
          success: function(data){
               if (!data)
                  alert("ERROR data");
                else
                  $("#name").val(data.name);  
          },
          dataType: "json"
        });

  		  return false;
  		}
 		
  		function changeClicked(){
    		  //$.post("/change", {index:$("#index").val() , name:$("#name").val()},successChange);

           $.ajax({
          url : "/change",
          type: "POST",
          data: {index:$("#index").val() , name:$("#name").val()},
          success: function(data){
               if (!data)
                  alert("ERROR");
               else
                  alert("CHANGE VALID");
          },
          dataType: "json"
        });
    		  return false;
    	}

  		$(document).ready(function(){ 

        $("#name").keydown( function( event ) {
            if ( event.which === 13 ) {
              changeClicked();
              event.preventDefault();
              return false;
            }
        });
        
        $("#index").keydown( function( event ) {
            if ( event.which === 13 ) {
              requestClicked();
              event.preventDefault();
              return false;
            }
        });

  		  $("#requestButton").click(requestClicked);
  		  $("#changeButton").click(changeClicked);  //new

  		});  		
    

