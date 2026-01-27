// console.log("hello this is backend")
// console.log("hello this is Hemanth")
// console.log("My name is Hemanth")

const express = require("express");
const task = require("./Task");
const app = express();

const port = 8000;

app.get("/", task.home);
app.get("/about", task.about);
app.get("/index.html", task["index.html"]);


// app.get("/", (req, res) => {
//     res.send("Hello World")

// })
// app.get("/about", (req, res) => {
//     res.send("About Page")
// })
// app.get("/contact",(req,res) =>{
//     res.send("This is contact page")
// })

// app.get("/index.html", (req, res) => {
//     res.sendFile(__dirname + "/pages/index.html")
// })

// app.get("/Test.js", (req, res) => {
//     res.sendFile(__dirname + "/Test.js")
// })

// app.get("/user/login",(req,res) =>{
//     res.send("<h1>User Login Page</h1>")
// })
// app.get("/user/signup",(req,res) =>{
//     res.send("<h1>User Signup Page</h1>")
// })

//Search query
// app.get("/search", (req, res) => {
//     const query = req.query.q;
//     res.send(`Search results for: ${query}`);
// })
//http://localhost:8000/search?q=express

//dynamic routing
// app.get("/user/:id", (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });

app.listen(port, (e) =>{
    if (e) throw e;
    else{
        console.log(`http://localhost:${port}`);
    }
})