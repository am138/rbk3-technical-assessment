var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW


////i know that we must make an obj to save the name and a counter to the id
///and we will use ajax by get and post method 
/// and the url that you give in readme 
///but my mind can't transalete any code now


$.ajax({
	method :"POST",
	url :'/api/users' ,

}).done(function(name, id){
	
})



// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

