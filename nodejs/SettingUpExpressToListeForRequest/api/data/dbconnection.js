

var MongoClient = require('mongodb'),MongoClient; //drive
var dburl = 'mongodb://127.0.0.1:27017';

var _connection = null;
//open the connection
var open = function(){
    MongoClient.connect(dburl, function(err, db){
        if(err){

            console.log("DB connection failed");
            return;

        }
        _connection = db.db('meanhotel');
       // console.log("DB connection open", db);
    });
};

var get = function(){
    return _connection;
};

module.exports = {
    open : open,
    get : get
};
