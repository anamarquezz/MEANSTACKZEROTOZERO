var express = require('express');
var app = express();
var path = require('path');


app.set('port',3000);
                      // req:Requestobject res:Response object
/*app.get('/', function(req, res){
    console.log("Get the homepage");
    res.status(404)
    .send('Express yourself');
});*/

app.get('/', function(req, res){
    console.log("Get the homepage");
    res.status(200)
    .sendfile(path.join(__dirname,'public','index.html'));
});

app.get('/json', function(req, res){
    console.log("Get the json");
  res.status(200)
    .json("{jsonData:true}");
});

app.get('/file', function(req, res){
    console.log("Get the file");
  res.status(200)
    .sendFile(path.join(__dirname,'app.js'));
});

var server = app.listen(app.get('port'), function(){ //IS ASYNCHRONOUS
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

