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
      
  		function readClicked(){
        //$.get("/request?index=3",successRequest);  //below line is also a query.
        //$.get("/request", {index:$("#index").val()},successRequest);
        if($("#index").val()==""){
           $.ajax({
          url : "/read" ,
          type: "GET",
          success: function(data){
            $("#list").empty();
            for(let i = 0;i<data.length;i++){
              $("#list").append("<li>" + data[i].name + "</li><br>")
            }
          },
          dataType: "json"
        });
        }else {
           $.ajax({
          url : "/read/" + $("#index").val(),
          type: "GET",
          success: function(data){
               if (!data){
                alert("ERROR NAME")
               }
                else {
                  $("#name").val(data.name);
                }
          },
          dataType: "json"
        });
        }
       

  		  return false;
  		}
 		
  		function createClicked(){
    		  //$.post("/change", {index:$("#index").val() , name:$("#name").val()},successChange);

           $.ajax({
          url : "/create",
          type: "POST",
          data: {index:$("#index").val() , name:$("#name").val()},
          success: function(data){
               if (!data)
                  alert("ERROR");
               else
                  alert("CREATE VALID");
          },
          dataType: "json"
        });
    		  return false;
    	}

      function updateClicked(){
        $.ajax({
          url : "/update",
          type: "PUT",
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

      function deleteClicked(){
          $.ajax({
          url : "/delete/" + $("#index").val(),
          type: "DELETE",
          success: function(data){
               if (!data)
                  alert("ERROR");
               else
                  alert("DELETE VALID");
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

  		  $("#readButton").click(readClicked);
  		  $("#createButton").click(createClicked);  
        $("#updateButton").click(updateClicked);
        $("#deleteButton").click(deleteClicked);

  		});  		
    

