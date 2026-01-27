const fs = require("fs");

// fs.mkdirSync("./newFolder");
// fs.writeFileSync("./newFolder/example.txt", "This is a sample text file.");

// const content = fs.readFileSync("./newFolder/example.txt", "utf-8");;
// console.log(content);

// fs.appendFileSync("./newFolder/example.txt", "\nThis is an appended text.");fs.mkdirSync("./TestFolder");// fs.renameSync("./newFolder/example.txt","./newFolder/info.txt");
// fs.unlinkSync("./newFolder/info.txt")
// fs.rmdirSync("./newFolder")



const stringUtil = require("../stringUtil");

console.log(stringUtil.reverse("hemanth"));     // htnameh
console.log(stringUtil.countChars("hello"));    // 5
console.log(stringUtil.toUpper("nodejs"));      // NODEJS
