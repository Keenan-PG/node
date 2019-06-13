var EventEmitter = require('events').EventEmitter;
// import event emitter

var chat = new EventEmitter();
// make new event emitter obj

chat.on('message', function(message) {
    console.log(message);
});
// on event message, provide callback accepting message and log it 