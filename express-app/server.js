import express from "express";
const app = express();
const port = 8000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/user/:id",(req,res) =>{
//     res.send(req.params.id);
// });

// app.get("/user/:id", (req, res) => {
//     console.log(req.params);
//     res.send(req.params.id);
// });

// app.get("/search", (req, res) => {
//   res.send(req.query.keyword);
// });

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send(req.query.keyword);
// });

// app.get("/search", (req, res) => {
//     const keyword = req.query.keyword;

//     if (!keyword) {
//         return res.send("Please provide a keyword");
//     }

//     res.send(`Searching for: ${keyword}`);
// });

// app.get("/index.html", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

//Middleware
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});



// res.sendFile(__dirname + "/index.html");

// res.send("<h1>Hello</h1>");
// res.json({ name: "Hemant", role: "Student" });



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});