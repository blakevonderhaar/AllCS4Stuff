var mongoose = require("mongoose");
var Student = require("./student");

mongoose.connect("mongodb://localhost/StudentShow");

// let aaroh = Student.create({
//   ident: "1523",
//   name: "Aaroh",
//   gradeLevel: 12,
// },function(err,info){
//   console.log(err);
// });

// Student.findOne({ident:"1523"},function(err,info){
//   console.log(err);
//   console.log(info.name);
//   console.log(info.gradeLevel);
// });

// Student.findOneAndUpdate({ident:"1523"},{name:"Kiwi",gradeLevel:9},function(err,info){
//   console.log(err);
//   console.log(info.name);
//   console.log(info.gradeLevel);
// });


// Student.find({},function(error,info){
//     console.log(error);
//     console.log(info.length);
//     for(var i=0;i<info.length;i++)
//       console.log(info[i].name);
//
// });


// let bob = Student.create({
//   ident: "28",
//   name: "Bob",
//   gradeLevel: 12,
// },function(err,info){
//   console.log(err);
// });


// Student.remove({ident:"28"},function (error,info) {
//   console.log(error);
//   console.log(info.result);
// });


// aaroh.then(function (arrohData) {
//   console.log(aarohData);
// });
