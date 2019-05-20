/*
* IMPORTS
*/
const fs = require('fs');


/*
* BODY
*/

/* ADD NOTES */

function getNotes() {
    return 'Your notes...';
}

// func to load existing notes (as array)
const loadNotes = () => {
    // try catch for file access validation
    try {
        // parsing notes into js array from json
        const dJSON = fs.readFileSync('notes.json').toString();
        const data = JSON.parse(dJSON);

        // data as js
        return data;
    } catch (e) {
        // returning empty array if error/no file
        return [];
    }
    
}

// save notes
const saveNotes = (data) =>  {
    // making data into JSON
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync('notes.json', dataJSON);
}

// add note function
const addNote = (title, body) => {
    // loading notes array into local const
    const notes = loadNotes();

    // filter array - if obj.title = title, put that into an array
    const duplicateNotes = notes.filter((obj) => obj.title === title);

    // no duplicates if array length is zero
    if (duplicateNotes.length === 0) {
        // adding to array
        notes.push({
            title: title,
            body: body
        })

        // using saveNotes function
        saveNotes(notes);

        // returning true for conditionals in app
        return true;
    } else {
        // returning false for conditionals in app
        return false;
    }
}

/* REMOVE NOTES */

// remove note function
const removeNote = function(title) {
    // loading notes array into local let (not const as if title exists it will be replaced)
    let notes = loadNotes();

    // filtering to make new array of notes without the title specified
    const noteRemove = notes.filter((obj) => obj.title !== title);

    // logic to ensure length of array is not the same as it was (as if it is, it's right to assume that title doesn't exist as there were no changes made)
    if (notes.length !== noteRemove.length) {
        // replacing notes array with array not including entry with title 
        notes = noteRemove;
        // saving back into file
        saveNotes(notes);
        // for conditionals in app
        return true;
    } else {
        // for conditionals in app
        return false;
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