import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const task = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, 'pages', 'index.html'));
    },
    
    about: (req, res) => {
        res.send('<h1>About Page - ES Module</h1><p>Using import/export</p>');
    },
    
    contact: (req, res) => {
        res.send('<h1>Contact Page - ES Module</h1>');
    },
    
    login: (req, res) => {
        res.send('<h1>Login Page - ES Module</h1>');
    }
};

export default task;  