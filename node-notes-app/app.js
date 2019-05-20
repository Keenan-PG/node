/*
* IMPORTS
*/
const yargs = require('yargs');
const notes = require('./notes');
const chalk = require('chalk');

/*
* LAZY
*/
const log = console.log;

/*
* BODY
*/

/*   Customising yargs version  */
yargs.version('1.1.0')

/*   Creating add command  */

// creating new command argument - yargs object
yargs.command({
    //name
    command: 'add',
    // description
    describe: 'Add a new note',
    // builder object - all options to for command to support
    builder: {
        title: {
            // description
            describe: 'Note title',
            // making it required
            demandOption: true,
            // enforcing type
            type: 'string'
        },
        body: {
            // description
            describe: 'Note text',
            // making it required
            demandOption: true,
            // enforcing type
            type: 'string'
        }
    },
    // code to execute
    handler: function (argv) {
        if (notes.addNote(argv.title, argv.body)) {
            log(chalk.green.inverse('Note added; Title: "' + argv.title + '",  Body: "' + argv.body + '"'));
        } else {
            log(chalk.red.inverse('Note not added :( Title: "' + argv.title + '" is a duplicate.'));
        }
    }
})

/*   Creating remove command  */

yargs.command({
    //name
    command: 'remove',
    // description
    describe: 'Remove a note',
    // definiing command options 
    builder : {
        title: {
            // description
            describe: 'Note title',
            // making it required
            demandOption: true,
            // enforcing type
            type: 'string'
        }
    },
    // code to execute
    handler: function (argv) {
        if (notes.removeNote(argv.title)) {
            log(chalk.green.inverse('Note with title of ' + argv.title + ' removed!'));
        } else {
            log(chalk.red.inverse('Title does not exist. No changes made!'));
        }
    }
})

/*   Creating List command  */

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

/*   Creating Read command  */

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

/* Parsing arguments with all config details */

yargs.parse();