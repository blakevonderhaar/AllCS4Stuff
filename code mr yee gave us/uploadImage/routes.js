
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/index.html");
});

router.post('/upload', function(req, res){
console.log("upload");
		res.json({});
});

router.post('/fileupload', function(req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/public/images/' + files.filetoupload.name;

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;

console.log("fileupload " + files.filetoupload.name);

	    res.sendFile(__dirname + "/public/images/" + files.filetoupload.name);
      });
    });
});

module.exports = router;

