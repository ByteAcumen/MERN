const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (Name) =>{
    console.log(`hello ${Name} ,Welcome to Node.js Events`)
})
emitter.emit("greet", "Hemant")

emitter.on("Order", (item,qty) => {
    console.log(`Order recived : ${item} X ${qty}`)
})
emitter.emit("Order", "Pizza", 2)