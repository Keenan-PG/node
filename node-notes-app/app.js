const ch = require('chalk');
const yargs = require('yargs');
const getNotesFunc = require('./notes.js');

//shorthand
const log = console.log;
const notes = getNotesFunc();

// customing yargs version 
yargs.version('1.1.0')

// creating list command 
yargs.command({
    //name
    command: 'add',
    // description
    describe: 'Add a new note',
    // code to execute
    handler: function () {
        log('Adding new note');
    }
})

// creating remove command 
yargs.command({
    //name
    command: 'remove',
    // description
    describe: 'Remove a note',
    // code to execute
    handler: function () {
        log('Removing note');
    }
})

// creating list command 
yargs.command({
    //name
    command: 'list',
    // description
    describe: 'List your notes',
    // code to execute
    handler: function () {
        log('List of notes');
    }
})

// creating list command 
yargs.command({
    //name
    command: 'read',
    // description
    describe: 'Read your notes',
    // code to execute
    handler: function () {
        log('Read a note');
    }
})

// printing yargs
log(yargs.argv);
