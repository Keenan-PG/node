const { sum } = require('./exports.js');
const log = console.log;

log(sum(2, 4));

// node modules
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hello world :/");
})

server.listen(3200);