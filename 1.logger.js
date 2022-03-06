const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    // Raised an event
    this.emit("messageLogged", { id: 23 });
  }
}

module.exports = Logger;
