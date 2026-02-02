const path = require("path");

const task = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  },

  about: (req, res) => {
    res.send("this is about page...");
  },

  contact: (req, res) => {
    res.send("<h1>hello this is contact page</h1>");
  },

  username: (req, res) => {
    const username = req.params.username;
    res.send(`<h1>hello this is ${username} page</h1>`);
  },

  search: (req, res) => {
    const keyword = req.query.keyword;
    res.send(`<h1>hello i am searching for ${keyword}</h1>`);
  },

  index_html: (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"));
  },

  // middleware routes
  login: (req, res) => {
    res.send("<h1>this is user login page</h1>");
  },

  signup: (req, res) => {
    res.send("<h1>this is user signup page</h1>");
  },

  instagram: (req, res) => {
    res.send("<h1>this is instagram page</h1>");
  },
};

module.exports = task;
