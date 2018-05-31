var express = require("express");
var logger = require("morgan");

var app = express();


app.use(function(req,res,next) {
  console.log("first app.use " + req.method + " to " + req.url);
  next();
});

app.use(logger("short"));


app.use(function(req,res,next) {
  console.log("third app.use because app.use(logger) called above");
  var minute = (new Date()).getMinutes();
  if ((minute % 2) === 0) {
    console.log("minutes is even so continue");
    next();
  } else {
    console.log("minutes is odd so stop");
    res.statusCode = 403;
    res.end("Not authorized.");
  }
});

app.use(logger("dev"));

app.use(function(req,res) {
  console.log("fourth app.use");
  res.writeHead(200,{ "Content-Type": "text/plain" });
    res.end("Secret info: the password is swordfish");
});


app.listen(3000);


