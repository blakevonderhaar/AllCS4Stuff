
var express = require('express');
var routes = require("./routes");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);


app.listen(3000);