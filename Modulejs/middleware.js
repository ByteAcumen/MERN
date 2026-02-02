import express from 'express';
import task from './task.js'; 

const router = express.Router();

// Middleware for user routes
router.use((req, res, next) => {
    console.log('ES Module - User Route Middleware');
    next();
});

router.get('/login', task.login);

router.get('/signup', (req, res) => {
    res.send('<h1>Signup Page - ES Module</h1>');
});

export default router;  