var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

// adding event listeners
chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join', 'Keenan');
chat.emit('message', 'Keenan');