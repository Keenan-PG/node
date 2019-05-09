const ch = require('chalk');
const getNotesFunc = require('./notes.js');

//shorthand
const log = console.log;
const notes = getNotesFunc();
const command = process.argv[2];

// printing args
log(process.argv[2]);

switch (command) {
    case 'add':
        log(ch.green.bold.inverse('Adding note.'));
        break;
    case 'remove':
        log(ch.yellow.bold.inverse('Removing note.'))
        break;
    default: 
        log(ch.red.bold.inverse('Please provide an intruction (add/remove).'))
}