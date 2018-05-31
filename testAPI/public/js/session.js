


 		
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


	function createClicked(){
          if ($("#ident").val() == "") {
            alert("ERROR");
            return false;
          }

          $.ajax({
            url: "/create",
            type: "POST",
            data: {ident:Number($("#ident").val()), name:$("#name").val()},
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

      function success2(data) { 

        $("#list").empty();
         $("#list").append("<li>" + data.info[0].player.FirstName + " " + data.info[0].player.LastName + " Points = " + data.info[0].stats.Pts['#text'] + "</li>");
      }    

     
        function requestClickedNBAPlayer(){
//send an HTTP get request and get a result back.
      $.get("/request/nba/stats/"+$("#selectPlayer").val(), success2);
        return false;
      }

      


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
	});

	$("#logout").click(logoutClicked);
	$("#createButton").click(createClicked);
  $("#displayButton").click(requestClickedNBAPlayer);

});  		
    


