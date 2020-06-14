var express = require('express');
var app = express();
var path = require('path');

var router = require('./public/routes');


app.set('port',3000);



//app.use('/public',express.static(path.join(__dirname,'public')));



app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', router);


// req:Requestobject res:Response object
/*app.get('/', function(req, res){
    console.log("Get the homepage");
    res.status(404)
    .send('Express yourself');
});

// (01
app.get('/', function(req, res){
    console.log("Get the homepage");
    res.status(200)
    .sendfile(path.join(__dirname,'public','index.html'));
});*/

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
//01)


