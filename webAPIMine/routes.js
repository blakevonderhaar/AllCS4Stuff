var express = require("express");
var router = express.Router();

var sports = require('./sportsModule');
sports('andrewyates', 'T4pQsEYsxXop');

router.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html");
});

////////////////////////////////////

router.get("/request", function(req, res, next) {
	sports.NHL.getActivePlayers( function (err, obj) {
    		if (err) {
        		return console.log('Error occurred active_players: ' + err);
    		}
var result = JSON.stringify(obj);
console.log(result);
//console.log(result[0].stats.GamesPlayed['#text']);
		res.json({"info":obj});
	});
});

////////////////////////////////////

router.get("/request2", function(req, res, next) {
	sports.NBA.getActivePlayers2( function (err, obj) {
    		if (err) {
        		return console.log('Error occurred active_players: ' + err);
    		}
var result = JSON.stringify(obj);
console.log(result);
//console.log(result[0].stats.GamesPlayed['#text']);
		res.json({"info":obj});
	});
});

////////////////////////////////////

router.get("/request3", function(req, res, next) {
	sports.NBA.getActivePlayers2( function (err, obj) {
    		if (err) {
        		return console.log('Error occurred active_players: ' + err);
    		}
var result = JSON.stringify(obj);
console.log(result);
//console.log(result[0].stats.GamesPlayed['#text']);
		res.json({"info":obj});
	});
});

router.use(function(req,res,next) {
	next();
});

router.use(function(req,res) {
	res.statusCode = 404;
	res.end("404!");
});

module.exports = router;
