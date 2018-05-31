
$(document).ready(function(){

	$.get("/userInfo",function(data){
		if(data != null)
			if (data.username){
				$("#username").attr('href' , "account");
				$("#username").html( data.username);
			}
	});

	$("#searchBar").keydown( function( event ) {
            if ( event.which === 13 ) {
                searchFor();
                console.log("pressed enter");
                event.preventDefault();
                return false;
            }
        });

});

function searchFor(){
    window.location = "list2/" + $("#searchBar").val();
}
