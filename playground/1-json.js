// imports
const fs = require('fs');

// vars
const log = console.log

// obj
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Haliday'
// }

/* 
* JSON.stringify()
* JS object/array/value -> JSON
*/

// const bookJSON = JSON.stringify(book);
// log('JSON Data/string: ' + bookJSON);

/* 
* JSON.parse()
* JSON -> JS object/array/value
*/

// const jsonBook = JSON.parse(bookJSON);
// log('Actual JS object: ', jsonBook);

/* 
* Saving JSON
*/

// fs.writeFileSync('1-json.json', bookJSON);



/* Accessing JSON data 
* (commented out code above which creates file as it now exists)
*/

// read file - returned as machine code
const dataBuffer = fs.readFileSync('1-json.json');
// converting data to string (basically back to json)
const dataJSON = dataBuffer.toString();
// parsing JSON into OBJ
const data = JSON.parse(dataJSON);

// obj title prop
log(data.title);
// obj author prop
log(data.author);
// obj 
log(data);