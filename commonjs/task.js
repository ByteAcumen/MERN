const path = require('path');
const { login } = require('../Express/Task');
const task = {
    home:(req,res) => {
        res.sendFile(path.join(__dirname, "pages", "index.html"));
    },
    about:(req,res) => {
        res.send('<h1>About Page - CommonJS</h1>');
    },
    login:(req,res)=>{
        res.send('<h1>Login Page - CommonJS</h1>');
    },
};
module.exports = task;