var express = require("express");
var passport = require("passport");
var path = require("path");

var User = require("./models/user");
var router = express.Router();
var mongoose = require("mongoose");


var formidable = require('formidable');
var fs = require('fs');
const itemdatabase = require('./itemDatabase');
const cartdatabase = require('./cartDatabase');
var itemDB = new itemdatabase();
var cartDB = new cartdatabase();

/////////database items///////////////edited
// itemDB.addItem({name:"Xbox One X", price: 449.99, desc:"Latest Gaming console from Microsoft" , img: "/images/xBox.jpg",category:"electronics"});
// itemDB.addItem({name:"PS4Pro", price: 349.99, desc:"Latest Gaming console from Sony" , img: "/images/PS4.jpg",category:"electronics"});
// itemDB.addItem({name:"PlayerUnkowns Battlgrounds", price: 59.99, desc:"Hit batle royale game." , img: "/images/PUBGitem.jpg",category:"misc"});
// itemDB.addItem({name:"Battlefront 2", price: 59.99, desc:"Militaristic shooter from DICE." , img: "/images/badgame.jpg",category:"misc"});
// itemDB.addItem({name:"Bed", price: 49.99, desc:"Twin Size Bed." , img: "/images/bed.jpg",category:"misc"});
// itemDB.addItem({name:"Dresser", price: 69.99, desc:"Large dresser." , img: "/images/dresser.jpg",category:"misc"});
// itemDB.addItem({name:"Refrigerator", price: 124.99, desc:"Nice Refrigerator." , img: "/images/fridge.jpg",category:"electronics",category:"electronics"});
// itemDB.addItem({name:"Stove", price: 224.99, desc:"Nice Stove with 4 burners on top." , img: "/images/stove.jpg",category:"electronics"});
// itemDB.addItem({name:"Iphone X", price: 899.99, desc:"Latest phone from Apple." , img: "/images/iphonex.jpg",category:"electronics"});
// itemDB.addItem({name:"Iphone X case", price: 20.99, desc:"Case for the Iphone X." , img: "/images/iphonexcase.jpg",category:"misc"});
// itemDB.addItem({name:"Android Phone", price: 69.99, desc:"Phone from android." , img: "/images/androidphone.jpg",category:"electronics"});
// itemDB.addItem({name:"Google Pixel 2", price: 99.99, desc:"Latest phone from google." , img: "/images/googlepixel2.jpg",category:"electronics"});
// itemDB.addItem({name:"Bedding", price: 20.99, desc:"Cheap Bedding" , img: "/images/bedding.jpg",category:"misc"});
// itemDB.addItem({name:"Football", price: 10.99, desc:"Football" , img: "/images/football.jpg",category:"sports"});
// itemDB.addItem({name:"Soccer Ball", price: 10.99, desc:"Soccor Ball" , img: "/images/soccerball.jpg",category:"sports"});
// itemDB.addItem({name:"Basket ball", price: 12.99, desc:"Basketball" , img: "/images/basketball.jpg",category:"sports"});
// itemDB.addItem({name:"Baseball", price: 7.99, desc:"Baseball" , img: "/images/baseball.jpg",category:"sports"});
// itemDB.addItem({name:"Baseball Bat", price: 30.99, desc:"wooden baseball bat" , img: "/images/baseballbat.jpg	",category:"sports"});
// itemDB.addItem({name:"Helmet", price: 5.99, desc:"bike helmet" , img: "/images/bikehelmet.jpg",category:"misc"});
// itemDB.addItem({name:"Panda", price: 5000.99, desc:"Its so fluffy" , img: "/images/panda.jpg",category:"animals"});
// itemDB.addItem({name:"Pegasus", price: 99999.99, desc:"You can fly with it" , img: "/images/pegasus.jpg",category:"animals"});
// itemDB.addItem({name:"Tiger", price: 200.99, desc:"Rawr ;)" , img: "/images/tiger.jpg",category:"animals"});
// itemDB.addItem({name:"Dragon", price: 5000.99, desc:"Nice pet to have" , img: "/images/dragon.jpg",category:"animals"});
// itemDB.addItem({name:"Dog", price: 5.99, desc:"Dont Bother" , img: "/images/dog.jpg",category:"animals"});
////////////////////////////////

/////////////////////////////////



//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) {
//    next();
//  } else {
//    req.flash("info", "You must be logged in to see this page.");
//    res.redirect("/login");
//  }
//}

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

let currCatg;
let currSearch;
let searchedSomething;

router.get("/list2/:catg",function(request,response){
	currSearch = request.params.catg;
	searchedSomething = true;
	console.log("This is = " + currSearch);
		response.sendFile(__dirname + "/public/views/List.html");
});


router.get("/list/:catg",function(request,response){
	currCatg = request.params.catg;
	// console.log("This is = " + currCatg);
		response.sendFile(__dirname + "/public/views/List.html");
});

router.get("/cartList",function(request,response){
	response.sendFile(__dirname + "/public/views/cartList.html");
});

router.get("/sellList",function(request,response){
	response.sendFile(__dirname + "/public/views/sellList.html");
});

router.get("/addItem",function(request,response){
	response.sendFile(__dirname + "/public/views/addingItem.html");
});

let currItem;
router.get("/itemPage/:name",function(request,response){
	currItem = request.params.name;
	response.sendFile(__dirname + "/public/views/itemPage.html");
});

router.get("/updateItem",function(request,response){
	response.sendFile(__dirname + "/public/views/updatingItem.html");
});
router.get("/account",function(request,response){
	response.sendFile(__dirname + "/public/views/account.html");
});


router.get("/successroot", function(req, res) {
console.log("get successroot");
	res.json({redirect:"/"});
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
	res.json({redirect:"/login"});
});

router.get("/successsignup", function(req, res) {
console.log("get successsignup");
	res.json({redirect:"/session"});
});

router.get("/failsignup", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});
});

router.get("/successlogin", function(req, res) {
console.log("get successsignup");
	res.json({redirect:"/session"});
});
router.get("/faillogin", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});

});



router.get("/", function(req, res, next) {
console.log("get root");
	let thePath = path.resolve(__dirname,"public/views/Home.html");
	res.sendFile(thePath);

 // User.find()
 // .sort({ createdAt: "descending" })
 // .exec(function(err, users) {
 //   if (err) { return next(err); }
 //   res.render("index", { users: users });
 // });
});


router.get("/signup", function(req, res) {
console.log("get signup");

	let thePath = path.resolve(__dirname,"public/views/signup.html");
	res.sendFile(thePath);

});

router.get("/login", function(req, res) {
console.log("get login");

	let thePath = path.resolve(__dirname,"public/views/login.html");
	res.sendFile(thePath);

});


router.get("/session", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {
	let thePath = path.resolve(__dirname,"public/views/Home.html");
	res.sendFile(thePath);
  } else {
  	let thePath = path.resolve(__dirname,"public/views/login.html");
	res.sendFile(thePath);
  }
});

router.get("/userInfo",function(req,res){
     if (req.isAuthenticated()) {
		res.json({username:req.user.username});
	}
	else {
		res.json(null);
	}
});




router.get("/logout", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect("/successroot");
  } else {
    res.redirect("/failroot");
  }
});

router.post("/signup", function(req, res, next) {
console.log("post signup");

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function(err, user) {

    if (err) { return next(err); }
    if (user) {
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }
console.log("post signup1");

    var newUser = new User({
      username: username,
      password: password,
      cartItems: []
    });
console.log("post signup2");

    newUser.save(next);    //this line has to be called.
console.log("post signup done");

  });


}, passport.authenticate("login", {
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));

///////////////////////////////////itemDatabase interaction

router.post("/submitItem",function(req,res){//edited
	if(req.body.name == "" || req.body.price == "" || req.body.price <= 0 || req.body.desc == "")
		res.json(null);
	else{
		return (itemDB.addObj(req.body,res));
	}

});

router.get("/searchName", function(req,res){
		return(itemDB.getItem({name:currItem},res));
});

router.get("/getItemDB", function(req,res){
		return(itemDB.getAllItems(res));
});

router.get("/getItemDB/:search", function(req,res){
		return(itemDB.searchItems(req.params.search,res));
});

router.get("/getifSearched",function(req,res){//edited
	if(searchedSomething === true){
		searchedSomething = false;
		res.json({search:true, csearch:currSearch});
	}else {
		res.json({search:false, csearch:currSearch});
	}
});


router.get("/getCategory",function(req,res){//edited
	res.json({category:currCatg});
});

router.post("/updateItem",function(req,res){//edited
	if(req.body.name == "" || req.body.price == "" || req.body.price <= 0 || req.body.desc == "")
		res.json(null);
	else{
		itemDB.updateItem(req.body,res);
		res.json(req.body);
	}

});

router.get("/search",function(req,res){
	return(itemDB.getAllItems(res));
});


router.get("/loadItemPage",function(req,res){//edited
	var itemInfo = itemDB.getAllItems();
	// console.log(itemInfo);
	if(itemDB.checkCurrentItem()){
		console.log("current Item does exist");
		console.log("current Item does exist=" + itemDB.getCurrentItem());
		for(var i=0;i<itemInfo.length;i++){
			if((itemInfo[i] != null || itemInfo[i] != undefined) && itemInfo[i].name === itemDB.getCurrentItem()){
				console.log("I got the proper item=");
				console.log("This is the item I want=" + itemInfo[i].name);
				res.json({name:itemInfo[i].name,price:itemInfo[i].price,desc:itemInfo[i].desc,img: itemInfo[i].img});
				break;
			}
		}
	}
	else {
		console.log("currentItem didnt exist");
		res.json(null);
	}
});

///Upload images
router.post('/fileupload', function(req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/public/images/' + files.filetoupload.name;

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;

		res.redirect("/addItem");
      });
    });
});

/////////////////////////////////USERBUYITEM////////////////////////////////////

router.post('/addUserItem', function(req, res){
	if(req.isAuthenticated())
	{
		console.log("Inside addUserItem");
    if(req.body.name == "")
  		res.json(null);
  	else{
      var a = {name:req.body,user:req.user.username};
  		return (itemDB.addObj(a,res));
  	}
	}
	else {
		res.json(undefined);
	}
});

router.get('/getUserItemList', function(req, res){
	console.log("Inside getUserItemList");
  var itemList = [];
  for(let i=0; i< req.user.cartItem.length;i++){
    itemList.push(req.user.cartItem[i]);
  }
  console.log(itemList);
	res.json(req.user.cartItem);
});

/////////////////////////////////USERSELLITEM///////////////////////////////////

router.post('/addUserSellItem', function(req, res){
	if(req.isAuthenticated())
	{
		console.log("Inside addUserSellItem");
		let item = {name: req.body.name , price: req.body.price,desc:req.body.desc,img:req.body.img,category:req.body.category};
		itemDB.addItem(item);
		// let returnValue = DB.addUserSellItem(user, item);
		// console.log(returnValue);
		res.json(item);
	}
	else {
		res.json(undefined);
	}
});

router.get('/getUserSellItemList', function(req, res){
	console.log("Inside getUserItemSellList");
	res.json(req.user.sellItems);
});







module.exports = router;
