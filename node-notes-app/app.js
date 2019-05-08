const validator = require('validator');
const getNotesFunc = require('./notes.js');

const notes = getNotesFunc();
const email = "keenan@golding.com"

console.log(notes);
console.log(validator.isEmail(email));