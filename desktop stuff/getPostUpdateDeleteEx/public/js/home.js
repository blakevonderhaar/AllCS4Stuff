

  		function readClicked(){
//        $.get("/read?index=3",successRead);  //below line is also a query.
//        $.get("/read", {index:$("#index").val()},successRead);

        if ($("#index").val() == "") {
          $.ajax({
            url: "/read",
            type: "GET",
            success: function(data){
              if (!data)
                  alert("ERROR data");
              else {

                $("#list").empty();
               
                for (let i=0;i<data.length;i++) {
                  console.log(data[i]);  
                  $("#list").append("<li>" + data[i] + "</li>");
                }
                
              }
            },
            dataType: "json"
          });              
        } else {
          $.ajax({
            url: "/read/" + $("#index").val(),
            type: "GET",
            data: {index:Number($("#index").val())},
            success: function(data){
              if (!data)
                  alert("ERROR data");
              else
                  $("#name").val(data.name);        
            },
            dataType: "json"
          });   
        }
  		  return false;
  		}
 		
  		function createClicked(){
//    		  $.post("/create", {index:$("#index").val() , name:$("#name").val()},successChange);

          $.ajax({
            url: "/create",
            type: "POST",
            data: {index:Number($("#index").val()), name:$("#name").val()},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,     
            dataType: "json"
          }); 
    		  return false;
    	}

      function updateClicked(){
          $.ajax({
          url: "/update",
          type: "PUT",
          data: {index:Number($("#index").val()) , name:$("#name").val()},
          success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("UPDATE VALID");
            } ,     
          dataType: "json"
        });    
          return false;          
      }


      function deleteClicked(){
          $.ajax({
            url: "/delete/" + Number($("#index").val()),
            type: "DELETE",
            success: function(data) { 
              if (!data)
                alert("NO DELETE");
              else
                alert("GOOD DELETE");
            } ,   
            dataType: "json"
          });  
          return false;             
      }

  		$(document).ready(function(){ 

        $("#name").keydown( function( event ) {
            if ( event.which === 13 ) {
              createClicked();
              event.preventDefault();
              return false;
            }
        });
        
        $("#index").keydown( function( event ) {
            if ( event.which === 13 ) {
              readClicked();
              event.preventDefault();
              return false;
            }
        });

  		  $("#readButton").click(readClicked);
        $("#createButton").click(createClicked);
        $("#updateButton").click(updateClicked);
        $("#deleteButton").click(deleteClicked);

  		});  		
    

