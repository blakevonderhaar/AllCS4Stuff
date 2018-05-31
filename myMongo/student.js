var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
  ident:{
    required:true,
    unique:true,
    type:String
  },
  name:String,
  gradeLevel:Number
});



var Student = mongoose.model("Student", studentSchema);

module.exports = Student;
