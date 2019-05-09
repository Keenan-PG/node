const validator = require('validator');
const ch = require('chalk');
const getNotesFunc = require('./notes.js');

const log = console.log;
const notes = getNotesFunc();
const email = "keenan@golding.com"

log(notes);
log(validator.isEmail(email));

// chalk challenge

log(ch.green.inverse.bold('Success!'));