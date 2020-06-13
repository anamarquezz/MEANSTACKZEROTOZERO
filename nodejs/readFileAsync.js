var fs = require('fs');

var onFileLoad = function(err, file){
    console.log("Got the file");
};

console.log("Going to get a file")

fs.readFileSync('readFileSync.js', function(err, file){
    console.log("Got the files");
});

console.log("App continues...")