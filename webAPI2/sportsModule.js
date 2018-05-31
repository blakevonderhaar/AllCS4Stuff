var MAX_PLAYERS = 10;
var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    port: '443',
    headers: { "User-Agent": "node " + process.version }
};
client.registerMethod("getActivePlayers", "https://www.mysportsfeeds.com/api/feed/pull/nhl/2015-2016-regular/active_players.json", "GET");

module.exports = function (username, password) {
    args.headers["Authorization"] = "Basic " + Buffer.from(username + ':' + password).toString('base64');
}

///////////////////////////////////////////////

module.exports["NHL"] = {
    getActivePlayers: function ( fn) {
    client.methods.getActivePlayers(args, function (data, response) {
            if (response.statusCode !== 200) return fn(response.statusCode);
        var obj = data.activeplayers.playerentry;
        obj.length = MAX_PLAYERS;
            fn(false, obj);
        });
    }
}

