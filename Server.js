// const http = require('http');

// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.end('Hello from the other side');
// })
// server.listen(port,(e) => {
//     if(e){
//         console.log("Error", e);
//     }
//     else{
//         console.log(`http://localhost:${port}/`);
//     }
// })


// const EventEmitter = require("events");  
// const { emit } = require("process");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("greet", (name) => {
//   console.log(`Hello from the greet event, ${name}!`);
// });
// eventEmitter.emit("greet", "User");
const stringUtil = require("./stringUtil");

console.log(stringUtil.reverse("hemanth"));     // htnameh
console.log(stringUtil.countChars("hello"));    // 5
console.log(stringUtil.toUpper("nodejs"));      // NODEJS
