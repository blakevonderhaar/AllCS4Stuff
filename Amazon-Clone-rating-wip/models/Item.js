

var mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
	name: {
		required: true,
		unique: true,
		type:String
	},
	price:Number,
	desc:String,
	img:String,
	category:String,
	rating:Number,
	numRating:Number
});

var Items = mongoose.model("Items", itemSchema);



module.exports = Items;
