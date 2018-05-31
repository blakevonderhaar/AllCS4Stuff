
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

 

    function addTeamName(){
      $("#selectPlayer").append('<option value=' + $("#ident").val() + '>' + $("#ident").val() + '</option>');
          $.ajax({
            url: "/create",
            type: "POST",
            data: {teamname:$("#ident").val(), name:currSessionName},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,     
            dataType: "json"
          }); 
          return false;
      console.log("appended team");
    }


    function requestClickedNBATeam(){
//send an HTTP get request and get a result back.
console.log("ident :" + $("#ident").val());
      $.get("/request/nbaTeam/"+$("#selectPlayer").val(), success5);
        return false;
      }
      function success5(data) { 

        $("#list").empty();
        console.log(data.info);

        for (let i=0;i<data.info.length;i++) {
          if(data.info[i].player.Height){
            if(data.info[i].player.IsRookie === "true")
              $("#list").append("<li>" + data.info[i].player.FirstName + " " + data.info[i].player.LastName + " " + data.info[i].player.Height + " R" +"</li>");
            else 
              $("#list").append("<li>" + data.info[i].player.FirstName + " " + data.info[i].player.LastName + " " + data.info[i].player.Height + "</li>");
           // $("#list").append("<li>" + data.info[i].player.FirstName + " " + data.info[i].player.LastName + " " + data.info[i].player.Height + "</li>");
          }
        }
        
      }

      function success6(data){
        if(!data)
          alert("ERROR");
        else
          for(var i = 0;i<data.length;i++ ){
            $("#selectPlayer").append('<option value=' + data[i].teamname + '>' + data[i].teamname + '</option>');
          }
      }



     

$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username){
			$("#session").html("Session " + data.username);
      currSessionName = data.username;
       $.get("/read/"+ data.username, success6);
    }
	});

	$("#logout").click(logoutClicked);
	$("#createButton").click(addTeamName);
  $("#displayButton").click(requestClickedNBATeam);

});  		
    


