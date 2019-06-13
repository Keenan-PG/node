//readfile non blocking
var fs = require('fs');

// var contents = fs.readFileSync('index.html');

// changed from sync as it's blocking
// var contents = fs.readFile('index.html');

// making callback func
var callback = function(error, contents) {
    console.log(contents);
}

// added callback
// var contents = fs.readFile('index.html', callback);
// console.log(contents); 
// dont need above as callback is doing console.log 

fs.readFile('index.html', callback);