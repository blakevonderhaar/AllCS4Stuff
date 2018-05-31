


var mongoose = require("mongoose");

var Info = mongoose.model("Teamname",{
	teamname: {
		type:String
	},
	name: String
});

module.exports = Info;




