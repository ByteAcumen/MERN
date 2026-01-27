const fs = require("fs")
const http = require('http');
const math = require("./math");
const EventEmitter = require("events");  
const { emit } = require("process");
// exports.greet = () => {
//   console.log("Hello from the greet function!");
// };

// console.log(math.add(5, 3));
// console.log(math.sub(10, 4));
// console.log(math.div(20, 5));
// console.log(math.a);

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
  console.log(`Hello from the greet event, ${name}!`);
});
eventEmitter.emit("greet");