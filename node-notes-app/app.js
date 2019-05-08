// const importedName = require('./utils.js');

// console.log(importedName);
// doesn't work due to scoping - need to explicity state what to import

const importAdd = require('./utils.js');

const sum = importAdd(4, -2);

console.log(sum);

// CHALLENGE

const getNotesFunc = require('./notes.js');

const notes = getNotesFunc();

console.log(notes);