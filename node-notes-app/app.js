// making const fs so i can use filesystem module
const fs = require('fs');

// filesystem - make file
fs.writeFileSync('notes.txt', 'Ello raffle');


// challenge 
fs.appendFileSync('notes.txt', 'Ello Keenan');