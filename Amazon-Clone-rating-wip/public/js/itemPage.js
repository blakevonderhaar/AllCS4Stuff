function buttonClicked(){
  console.log($('#price').val());
  var itemName;
  $.ajax({
    url: "/addUserItem",
    type: "POST",
    data: {name:$("#name").val()},
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

function changeRating(){
  $.get("/getItemDB/" + itemName,success2);
}

function success2(data){
  if(!data){
    alert("ERROR LOAD");
  }else {
    console.log("this is the data being passed back : " + data[0]);
  let ok = Number(data[0].rating) + $("#rate").val();
  console.log("ok value : " + ok);
  let alright = Number(data[0].numRating) + 1;
  console.log("alright value : " + alright);
  let currRating = ok/alright;
  console.log("currRating val : "+ currRating);
  let numratingCurr = Number(data[0].numRating) +1;
  console.log("curr rating : " + data[0].rating + " numrating " + data[0].numRating);

   $.ajax({
          url: "/updateRating",
          type: "POST",
          //add a path data to the img
          data: {name:itemName,rating:currRating,numRating:numratingCurr},
          success: function(data){
            if (!data){
              alert("ERROR UPDATE");
              }else{
              alert("UPDATE VALID");
            }
          } ,
          dataType: "json"
        });
 }
}

$(document).ready(function(){
  $.get("/searchName",function(data){
    if(!data)
      alert("ERROR LOAD");
    else{
      // alert("LOADING ITEM");
      console.log(data.name + " ++ " + data.price + " ++ " + data.desc);
      itemName = data.name;
      $("#name").html(data.name);
      $("#price").html(data.price);
      $("#desc").html(data.desc);
      $("#image").attr("src",data.img);
      $("#stars").html("Rating: " + data.rating);
    }
  });

  $("#rate").keydown( function( event ) {
            if ( event.which === 13 ) {
              changeRating();
              event.preventDefault();
              return false;
            }
        });


  $.get("/userInfo",function(data){
		if (data.username)
			$("#username").html( data.username);
	});
  $('#butn').click(buttonClicked);
});
