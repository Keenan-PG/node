/*
* IMPORTS
*/
const fs = require('fs');

/*
* LAZY
*/
const log = console.log;


/*
* BODY
*/

function getNotes() {
    return 'Your notes...';
}

// func to load existing notes (as array)
const loadNotes = function() {
    // try catch for file access validation
    try {
        // parsing notes into js array from json
        const dJSON = fs.readFileSync('notes.json').toString();
        const data = JSON.parse(dJSON);
        return data;
    } catch (e) {
        // returning empty array if error/no file
        return [];
    }
    
}

// save notes
const saveNotes = function (data) {
    // making data into JSON
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync('notes.json', dataJSON);
}

// remove note function
const removeNote = function(title) {
    // loading notes array into local const
    log('from remove note: ' + title);
}

// add note function
const addNote = function(title, body) {
    // loading notes array into local const
    const notes = loadNotes();
    // filter array - if title = obj.title, put that into an array
    const duplicateNotes = notes.filter(function (obj) {
        return obj.title === title;
    })

    // no duplicates if array length is zero
    if (duplicateNotes.length === 0) {
        // adding to array
        notes.push({
            title: title,
            body: body
        })

        // using saveNotes function
        saveNotes(notes);

        log("Notes saved!")
    } else {
        log("Title taken. No duplicate notes allowed.")
    }
}

/*
* EXPORTS
*/
// will export(/import) as an object with properties as functions above)
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}; 