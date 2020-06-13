var fs = require('fs');


console.log("Going to get a file")
var file = fs.readFileSync('readFileSync.js');
console.log("Got the files")
console.log("App continues...")