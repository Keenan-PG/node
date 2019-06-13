var http = require('http');

log = console.log;

/*
http.createServer(function(request, response) {
    response.writeHead(200); // giving response status code of 200
    response.write('Hello. This is dog.'); // response body
    response.end(); // close conneciton
}).listen(8080);
*/

// long running process
http.createServer(function(req, res) {
    res.writeHead(200); // giving status code 
    res.write('Dog is running'); // initial body
    setTimeout(function(){ // emulating long running process
        res.write('Dog is done'); // process res body
        res.end();
    }, 5000);
}).listen(8080);

console.log('listening on port 8080');