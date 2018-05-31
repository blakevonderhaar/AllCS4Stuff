String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var MAX_PLAYERS = 10;

var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);


//Node Rest Client is the node module we are using to retrieve JSON from a Rest API
var Client = require('node-rest-client').Client;
 
var client = new Client();

//When making a request to a REST API, we need to specify arguments for the API to authorize us.
//For this particular API, we need to pass in a Base64 encrypted string, "username:password" in the "Authorization" header 
var args = {
    port: '443',
    headers: { "User-Agent": "node " + process.version, "Authorization": "Basic " + Buffer.from('andrewyates:T4pQsEYsxXop').toString('base64')}
};

//The node module lets us register different methods for particular tasks
client.registerMethod("getActivePlayers", "https://www.mysportsfeeds.com/api/feed/pull/nhl/2015-2016-regular/active_players.json", "GET");

app.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html");
});

app.get('/request', (req, res) => {
    //Call the method defined above
    client.methods.getActivePlayers(args, function (data, response) {
        //Data is a parsed resonse (a JSON object)
        //Usually the API documentation contains information on how the JSON is structured
        var obj = data.activeplayers.playerentry;
console.log(obj.length);

        obj.length = MAX_PLAYERS;
        //We are converting the result into a string
        var result = JSON.stringify(obj);
console.log(result);
//        result = result.replaceAll("'", "-");
//        result = result.replaceAll('\\"', '');

        res.json({"info":obj });
    });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log('Started server');
});