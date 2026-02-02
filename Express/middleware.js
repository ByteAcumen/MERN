const express = require('express');
const task = require('./Task');

const router = express.Router();

router.get('/login', task.login);
router.get("/signup", task.signup); 
router.get("/home", task.home);

module.exports = router;