// local module(s)
const { sum } = require('./exports.js');
// npm module(s)
const exp = require('express');
const app = exp();
// shortcut(s)
const log = console.log;

app.get('/', (req, res) => {
    res.send("hello world from express")
}).listen(3200);


log(sum(2, 4));