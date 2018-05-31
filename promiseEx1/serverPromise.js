
var Promise = require('promise');
// mongoose is what will let us connect to our database
var mongoose = require('mongoose');
// our Student Object, check out Student.js
var Student = require('./Student');

// Use mongoose to connect to our database
mongoose.connect('mongodb://localhost/promiseEx');

// This is how you create a student
// Notice how all the fields in Student.js are provided
// If you don't specify a value, it will be null/false/0/''
var aaroh = Student.create({
  name: 'Aaroh',
  gradeLevel: 12,
});


var initializePromise = initialize();

initializePromise.then(
  function(result) {
    console.log("Initialized user details");
    // Use user details from here
    console.log("in init Promise " + result);
  },
	function(err) {
    console.log(err);
  }
);

function initialize() {

	return new Promise(function(resolve,reject) {

// We can also find all student with 'name' of 'Aaroh'
// Find another student using some other field
    Student.findOne({'name': "Aaroh"}, function(err, student) {
      if (err) {
       	console.log(err);
		  	reject(err);
      } else {
  		  console.log("in findOne " + student);
        resolve(student);
		  }
    });
  });
}




