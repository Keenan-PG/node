const fs = require('fs');

const log = console.log;

const dataJSON = fs.readFileSync('1-challenge.json').toString();
const data = JSON.parse(dataJSON);

data.name = "Keenan";
data.age = 20;

const newObj = JSON.stringify(data);

fs.writeFileSync('1-challenge.json', newObj);