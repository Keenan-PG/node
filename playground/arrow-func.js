/*
*   LAZY 
*/

const log = console.log;

/*
*   BODY 
*/

// normal traditional func 
const square = function (num) {
    return num * num;
}

// arrow func w return block (use { } if there is a lot to process etc)
const sqaure2 = (x) => {
    return x*x;
}

// arrow func with simple return
const squareBest = (x) => x*x;

log(squareBest(2));

/* Object with methods */

const event = {
    name: 'Keenans birthday gaff party',
    guestList: ['Rosie', 'Brad', 'Ollie', 'Jack'],
    printGuestList () {
        // arrow functions DO NOT bind their own 'this' value - better to use standard function to access object scope 
        log(`Guest list for ${this.name}`);

        // using standard func here scopes 'this' to inside of the function, so this.name doesn't exist (scope wise)
        // using arrow func allows to use parent scope
        this.guestList.forEach((guest) => {
            log(`${guest} is attending ${this.name}`)
        });
    }
}

event.printGuestList();