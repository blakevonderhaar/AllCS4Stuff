


 		
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}



function createClicked(){
//  if ($("#ident").val() == "") {
//    alert("ERROR");
//    return false;
//  }

  $.ajax({
    url: "/people",
    type: "POST",
    data: {ident:Number($("#ident").val()), name:$("#name").val()},
    success: function(data){
      if (!data)
        alert("ERROR");
      else if (data.redirect)
		window.location = data.redirect;
	 else
        alert("CREATE VALID");
    } ,     
    dataType: "json"
  }); 

  return false;
}



function sportsClicked(){
	console.log($("#player").val());
	$.get("/sports/" + $("#player").val(),function(data){
		if (data.redirect)
			window.location = data.redirect;
		else {
			console.log(data);

        $("#list").empty();
        $("#list").append("<li>" + data.player[0].player.FirstName + " " + 
        data.player[0].player.LastName + " Points = " + data.player[0].stats.Pts['#text'] + "</li>");


//	        for (let i=0;i<data.team.length;i++) {
//
//	        	if (data.team[i].player.Height) {
//	           		$("#list").append("<li>" + 
//	           		data.team[i].player.FirstName + " " + 
//	           		data.team[i].player.LastName + " " + 
//	           		data.team[i].player.Height + "</li>");
//			}
//	        }

		

		}
	});

/*
	$.get("/sports",function(data){

		if (data.redirect)
			window.location = data.redirect;
		else {
			console.log(data);
			$("#list").empty();
	        for (let i=0;i<data.info.length;i++) {
	           $("#list").append("<li>" + data.info[i].player.FirstName + " " + data.info[i].player.LastName + " " + data.info[i].player.Height + "</li>");
	        }		
		}
	});
*/
	return false;             
}


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
	});

    $("#createButton").click(createClicked);


	$("#logout").click(logoutClicked);
	$("#sports").click(sportsClicked);

});  		
    


