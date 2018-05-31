


 		
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}



function createClicked(){
//  if ($("#teamName").val() == "") {
//    alert("ERROR");
//    return false;
//  }

  $.ajax({
    url: "/people",
    type: "POST",
    data: {teamName:$("#teamName").val()},
    success: function(data){
      if (!data)
        alert("ERROR");
	  else if (data.redirect)
			window.location = data.redirect;
      else {
		if(data.teamName)
			$('#team').append($('<option>', { value : data.teamName }).text(data.teamName));
	  }
    } ,     
    dataType: "json"
  }); 

  return false;
}


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
		if(data.teams) {
			for (var i=0;i<data.teams.length;i++) {
				$('#team').append($('<option>', { value : data.teams[i].teamName }).text(data.teams[i].teamName));
			}
			
		}

	});

    $("#teamName").keydown( function( event ) {
        if ( event.which === 13 ) {
          createClicked();
          event.preventDefault();
          return false;
        }
    });
    $("#createButton").click(createClicked);

	$("#logout").click(logoutClicked);

});  		
    


