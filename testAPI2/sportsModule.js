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

module.exports["NBA"] = {
    
   getPlayerStats: function (name, fn) {
client.get('https://www.mysportsfeeds.com/api/feed/pull/nba/2017-2018-regular/cumulative_player_stats.json?player='+name, args, function (data, response) {
            if (response.statusCode !== 200) return fn(response.statusCode);
            var obj = 
data.cumulativeplayerstats.playerstatsentry;

            fn(false, obj);
        });
    },
    getTeam: function (name, fn) {
    console.log("getPlayer " + name);
client.get('https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/active_players.json?team='+name, args, function (data, response) {
            if (response.statusCode !== 200) return fn(response.statusCode);
            var obj = data.activeplayers.playerentry;
            fn(false, obj);
        });
    } 
         
}

