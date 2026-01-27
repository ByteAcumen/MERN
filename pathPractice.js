// const path = require("path")

// console.log("File Name",path.basename(__filename));
// console.log("Folder Name", path.basename(__dirname));
// const filepath = path.join(__dirname, "newFolder", "example.txt");
// console.log("joined path",filepath)
// console.log("Resolved path:", path.resolve("folder", "file.txt"));

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("Login",(user) => {
    console.log(`${user} has logged in`);
});

emitter.emit("Login", "User1");