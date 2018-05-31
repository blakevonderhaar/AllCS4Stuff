
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Info = require("./models/Info");

mongoose.connect("mongodb://localhost/infodb");
//mongoose.connect("mongodb://<username>:<password>@ds111111.mlab.com:11111/<databasename>");


var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port);



