
var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require("mongoose");
var mongoose = require("mongoose");
var Info = require("./models/Info");

// mongoose.connect("mongodb://<AdrianM>:<Shadeslayer365>@ds241570.mlab.com:41570/mlabex");
mongoose.connect("mongodb://blake:blake100@ds241570.mlab.com:41570/testdatabase", function(err,db){
	console.log(err);
	return;
})


var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port);
