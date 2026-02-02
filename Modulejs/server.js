import express from 'express';
import task from './task.js';
import useRouter from './middleware.js';

const app = express();
const port = 5000;
const{home,about,contact} = task;
app.use((req, res, next)=>{
    console.log(`ES Module: ${req.method} ${req.url}`)
    next();
})
app.use(express.static('public'))

app.get('/',home);
app.get('/about',about);
app.get('/contact',contact);    
app.use('/user', useRouter);

app.listen(port, () => {
    console.log(` http://localhost:${port}`)
})