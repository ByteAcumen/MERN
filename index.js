const fs = require("fs")
const http = require('http');
const path = require("path");
const port = 3000;

// const server = http.createServer((req,res) =>{
//     if(req.url == "/"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>hello this is Home pages</h1>")
//         res.end();
//     }        
//     else if(req.url == "./about"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>This is About Page</h1>")
//         res.end();
//     }
//     else if(req.url == "./contact"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>This is Contact Page</h1>")
//         res.end();
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write("<h1>404 Page Not Found</h1>");
//         res.end();
//     }
// })
// server.listen(port,(e) => {
//     if(e){
//         console.log("Error", e);
//     }
//     else{
//         console.log(`http://localhost:${port}/`);
//     }
// })


// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>this is home page</h1>")
//         res.end();
//     }
//     else if(req.url === "/about"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>This is About Page</h1>")
//         res.end();
//     }
//     else if(req.url === "/contact"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write("<h1>This is Contact Page</h1>")
//         res.end();
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write("<h1>404 Page Not Found</h1>");
//         res.end();

//     }
// })
// server.listen(port,(e) => {
//     if(e) throw e;
//     else{
//         console.log(`http://localhost:${port}`)
//     }
// })

// const readableStream = fs.createReadStream(path.join(__dirname, "example.txt"), "utf-8");
// const writeableStream = fs.createWriteStream(path.join(__dirname, "output.txt"));

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });

// readableStream.on("end", () => {
//     console.log("Reading completed");
//     writeableStream.end();
// });

// readableStream.on("error", (err) => {
//     console.error("Error reading file:", err);
// });

// writeableStream.on("error", (err) => {
//     console.error("Error writing file:", err);
// });

