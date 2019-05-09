// imports
const yargs = require('yargs');

//shorthand
const log = console.log;

/*
*   Customising yargs version  
*/
yargs.version('1.1.0')

/*
*   Creating add command  
*/

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
        log('Title: ' + argv.title);
        log('Body: ' + argv.body);
    }
})

/*
*   Creating remove command  
*/

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

/*
*   Creating List command  
*/

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

/*
*   Creating Read command  
*/

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

// parsing arguments with all config details 
yargs.parse();