

var mongoose = require("mongoose");

//Schema is a decription (the definition) of the mongoDB document.
var teamNameSchema = mongoose.Schema({
	userName: {
		required: true,
		type:String
	},
	teamName: {
		required: true,
		type:String
	}
});

var TeamName = mongoose.model("TeamName", teamNameSchema);

module.exports = TeamName;



