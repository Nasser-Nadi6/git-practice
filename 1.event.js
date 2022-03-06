const EventEmitter = require("events"); // EventEmitter is a Class
// const emitter = new EventEmitter(); // Create a instanse from Class

const Logger = require("./1.logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", function (data) {
  console.log("Listener called", data);
});

logger.log("Hello");
