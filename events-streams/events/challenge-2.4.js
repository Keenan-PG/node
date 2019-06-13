var http = require('http');

// var server = http.createServer(function(request, response) {
// response.writeHead(200);
// response.write("Hello, this is dog");
// response.end();
// });

var server = http.createServer();

server.listen(8080);

// adding event listener
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});