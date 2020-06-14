var express = require('express');
var app = express();


app.set('port',3000);

var server = app.listen(app.get('port'), function(){ //IS ASYNCHRONOUS
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});
console.log("Me first");

/**
 * how to instantiate express app , 
 * set a port number using  variables, 
 * how to read a number using variables , 
 * listeng for request on a particular port '
 * 
*/