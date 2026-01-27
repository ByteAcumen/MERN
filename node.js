// const fs = require('fs');
// const { read } = require('fs');
// const path = require('path');
// const os = require('os');
// const http = require('http');

// fs.mkdir('./Hemanth',(e) => {
//     if(e) throw e;
//     else{
//         console.log("Created Sucessfuly");
//     }
// })

// fs.writeFile("./Hemanth/Hemanth.txt","This is my file",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Scuess");
//     }
// })

// fs.readFile("./Hemanth/Hemanth.txt", "utf-8",(e,data) =>{
//     if(e) throw e;
//     else{
//         console.log(data);
//     }
// })

// fs.rename("./Hemanth/Hemanth.txt","./Hemanth/MyFile.txt",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Rename Successfully");
//     }
// })

// fs.unlink("./Hemanth/MyFile.txt",(e) => {
//     if(e) throw e;
//     else{
//         console.log("Deleted Successfully");
//     }
// })

// fs.rmdir("./Hemanth",(e) => {
//     if(e) throw e;
//     else{
//         console.log("Deleted Successfully");
//     }
// })

// if(fs.existsSync("./Hemanth/MyFile.txt")){
//     fs.unlink("./Hemanth/MyFile.txt",(e) => {
//         if(e) throw e;
//         else{
//             console.log("Deleted Successfully");
//         }
//     })
// }else{
//     console.log("File Not Found");
// }

// fs.appendFile("./Hemanth/MyFile.txt","Hello World", (e) => {
//     if(e) throw e;
//     else{
//         console.log("Append Successfully");
//     }
// })

// console.log(__dirname,"This is my dir");
// console.log(__filename,"This is my File");

// console.log(path.join(__dirname , "hello.js"));

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.basename(__dirname));
// console.log(path.dirname(__dirname));

// fs.writeFile(path.join(__dirname, "hello.txt"), "Hello World", (e) => {
//     if (e) throw e;
//     else {
//         console.log("File Created Successfully");
//     }
//     fs.readFile(path.join(__dirname, "hello.txt"), "utf-8", (e, data) => {
//         if (e) throw e;
//         else {
//             console.log(data);
//         }

//         fs.appendFile(path.join(__dirname, "hello.txt"), "Hello World", (e) => {
//             if (e) throw e;
//             else {
//                 console.log("Append Successfully");
//             }

//             fs.rename("./hello.txt", "./Hemanth.txt", (e) => {
//                 if (e) throw e;
//                 else {
//                     console.log("Rename Successfully");
//                 }
//             })
//         })
//     })
// })

// const fsPromises = require("fs").promises;

// const task = async () =>{
//     try{
//         const data = await fsPromises.readFile("Hemanth.txt","utf-8");
//         console.log(data);
//         console.log("File Read Successfully");
//     }
//     catch{
//         console.log("Something went Worng",err);
//     }
// }
// task();

//Crud Operation on fs

// const fsPromises = require("fs").promises;

// async function task() {
//     try {
//         // creating directory
//         await fsPromises.mkdir("./Hemanth");
//         console.log("Directory Created Successfully");

//         // writing the file
//         await fsPromises.writeFile("./Hemanth/Hemanth.txt", "Hello World");
//         console.log("Written Successfully");

//         // reading the file
//         const data = await fsPromises.readFile("./Hemanth/Hemanth.txt", "utf-8");
//         console.log(data);
//         console.log("Read Successfully");

//         // renaming the file
//         await fsPromises.rename("./Hemanth/Hemanth.txt", "./Hemanth/MyFile.txt");
//         console.log("Renamed Successfully");

//         // deleting the file
//         await fs.promises.unlink("./Hemanth/MyFile.txt");
//         console.log("Deleted Successfully");

//         // appending to the file
//         await fsPromises.appendFile("./Hemanth/MyFile.txt", "Hello World");
//         console.log("Appended Successfully");
//     } catch (err) {
//         console.log("Something went wrong:", err);
//     }
// }

// task();

// console.log(os.arch())
// console.log(os.cpus)
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.machine())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.version())
// console.log(os.networkInterfaces())

// let total_memory = os.totalmem();
// let kb = total_memory / 1024;
// let mb = kb / 1024;
// console.log(mb);

// const port = 3000;
// const server = http.createServer((req,res) =>{
//     // res.write("Hello from the other side");
//     // res.end();

//     if(req.url == "/"){
//         res.write("<h1>hello this is Home pages</h1>")
//         res.end();
//     }
//     else if(req.url == "./about"){
//         res.write("<h1>This is About Page,</h1>")
//         res.end();
//     }
//     else if(req.url == "./contact"){
//         res.write("<h1>This is Contact Page</h1>")
//         res.end();
//     }
//     else{
//         res.write("<h1>404 Page Not Found</h1>");
//     }

// })
// server.listen(port,(e) => {
//     if(e){
//         console.log("Error", e);
//     }
//     else{
//         console.log(`http://localhost:${port}/`);
//         console.log("http://localhost:"+port);
//     }
// })


const fs = require("fs")
const path = require("path")

const Folderpath = path.join(__dirname, "Hemanth")
const Filepath = path.join(Folderpath, "Hemanth.txt")

fs.mkdir(Folderpath,(e) =>{
    if(e) throw e;
    console.log("Folder Created:", Folderpath);
    
    fs.writeFile(Filepath, "Hello World", (e) => {
        if(e) throw e;
        console.log("File Created:", Filepath);
        
        // Read AFTER write completes
        fs.readFile(Filepath, "utf-8", (e, data) => {
            if(e) throw e;
            console.log("File Read:", data);
        })
    })
})