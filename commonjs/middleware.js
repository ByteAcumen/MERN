const express = require('express');
const task = require("./task");

const router = express.Router();

router.use((req,res,next) =>{
    console.log('User Route Middleware')
    next();
})

router.get('/login',task.login);
router.get('/signup',(req,res) => {
    res.send('<h1>Signup Page - CommonJS</h1>')
})

module.exports = router;