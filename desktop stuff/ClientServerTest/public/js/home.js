//Blake VonderHaar

$(document).on('input', '#rating', function() {
    $('#numRating').val( $(this).val() );
 
});


$(document).on('input', '#numRating', function() {
    $('#rating').val( $(this).val() );
 
});

function sendInfo(){
	$.post("/store",
	{index:$('#index').val(),
	object:$('#username').val(), 
	color:$('#color').val(), 
	rating:$('#numRating').val()}, checkNull)
}

function checkNull(data){
	if(data == null)
		alert("Enter an index or object name");
	else if(data == 1)
		alert("Entry Good");
}

$(document).ready(function(){   
	$("form").submit(function(event)
	{
		sendInfo();
		return false;

	})
});  		

  