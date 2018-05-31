$(document).on('input', '#rating', function() {
    $('#numRating').val( $(this).val() );
 
});
$(document).on('input', '#numRating', function() {
    $('#rating').val( $(this).val() );
 
});

function getInfo(){
	$.get("/get",{index:$('#index').val()}, fillForm)

	return false;
}

function fillForm(data){
	if(data == null){
		alert("ERROR Put a valid index");
	} else{
		console.log("I have filled the formed");
		$('#username').val(data.object);
		$('#color').val(data.color);
		$('#rating').val(data.rating);
		$('#numRating').val(data.rating);
	}

	return(false);
}

$(document).ready(function(){   
	$("form").submit(function(event)
	{
		getInfo();
		return false;
	})
});  





