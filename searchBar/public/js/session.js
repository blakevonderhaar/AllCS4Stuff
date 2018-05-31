
var currSessionName = "";
 		
function logoutClicked(){
	$.get("/logout",function(data){
		//window.location = data.redirect;
    var url = window.location.href;
    console.log("window location : " + url);
    window.history.go(-window.history.length);
    window.location.href = url;
	});
	return false;             
}


    function addSearch(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {name:$("#add").val()},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,     
            dataType: "json"
          }); 
    }

    function searchFor(){
      if($("#search").val())
      $.get("/getSearchInfo/" + $("#search").val() ,success);
    }
    function showEverything(){
      $.get("/showEverything/" ,success);
    }
    function success(data){
      $("#list").empty();
      for(var i = 0;i<data.length;i++){
          $("#list").append("<li>" + data[i].name + "</li>");
      }
    }


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username){
			$("#session").html("Session " + data.username);
    }
	});






  $("#search").keyup( function( event ) {
            if ( event.which === 13 ||  event.which === 8 || (event.which >= 49 &&  event.which <= 90)) {
                searchFor();
                event.preventDefault();
                return false;
            }
        });

  $("#addButton").click(addSearch);
  $("#searchButton").click(showEverything);

});  		
    


