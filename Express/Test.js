const express = require("express")
const app = express();
const port = 8000;


const __dirname = import.meta.dirname
const __filename = import.meta.filename
console.log(__dirname,"This is dir name")
console.log(__filename,"This is file name")
// Global Middleware - runs for ALL routes
app.use((req, res, next) => {
    console.log("This is the Middleware");
    next(); // Pass control to the next middleware/route
});


// Route-specific middleware - runs only for /test route
app.get("/test", (req, res, next) => {
    console.log("This is a route-specific middleware");
    next(); // Pass control to the next handler
}, (req, res) => {
    res.send("Test page after middleware");
});

app.get("/", (req, res) => {
    res.send("Hello, this is the home page");
})

app.get("/about", (req, res) => {
    res.send("This is about page");
})

app.get("/contact", (req, res) => {
    res.send("This is contact page");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(port, (e) => {
    if(e) throw e;
    else{
        console.log(`http://localhost:${port}`)
    }
})