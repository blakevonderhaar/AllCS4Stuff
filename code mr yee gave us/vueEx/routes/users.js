var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: 'Users', users : [{firstName:'Blake' 
  	, lastName:'VonderHaar'},{firstName:'Andrew' , lastName:'Yates'}] });
});

module.exports = router;
