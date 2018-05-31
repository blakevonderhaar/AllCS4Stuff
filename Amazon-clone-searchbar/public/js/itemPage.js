function buttonClicked(){
  console.log($('#price').val());

  $.ajax({
    url: "/addUserItem",
    type: "POST",
    data: {img: $('#image').attr("src"), price:$('#price').val(), name:$("#name").val() , desc:$("#desc").val()},
    success: function(data){
      if(!data)
        alert("NOT ADDED TO CART");
      else{
        alert("ADDED TO CART");
      }
    },
    dataType: "json"
  });
}

$(document).ready(function(){
  // $.ajax({
  //   url: "/loadItemPage",
  //   type: "GET",
  //   success: function(data){
  //     if(!data)
  //       alert("NO ITEMINFO");
  //     else{
  //       console.log("I want to change the page data");
  //       console.log('The data img=' + data.img);
  //       $("#name").html(data.name);
  //       $("#name").val(data.name);
  //       $("#price").html(data.price);
  //       $("#price").val(data.price);
  //       $("#desc").html(data.desc);
  //       $("#desc").val(data.desc);
  //       $("#image").attr("src", data.img);
  //     }
  //   } ,
  //   dataType: "json"
  // });
  $.get("/userInfo",function(data){
		if (data.username)
			$("#username").html( data.username);
	});
  $('#butn').click(buttonClicked);
});
