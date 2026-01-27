const path = require("path")
const task = {
    home: (req, res) => {
        res.send("This is the home page");
    },
    about: (req, res) => {
        res.send("This is the about page");
    },
    // index_html: (req, res) => {
    //     res.sendFile(path.join(__dirname, "index.html"))
    // }
    "index.html": (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"))
    }

}
module.exports = task;