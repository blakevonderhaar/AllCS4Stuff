
var express = require('express');
var path = require("path");
var routes = require("./routes");
var app = express();

app.use("/",express.static("./"));
app.use("/js", express.static("???"));

app.use(routes);
app.listen(3000);



