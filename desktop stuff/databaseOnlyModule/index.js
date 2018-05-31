

const myDatabase = require('./myDatabase');

let db = new myDatabase();


db.addObjectAtIndex({name:"Fred"},2);


console.log(db.getObjectAtIndex(2));
