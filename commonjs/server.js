const express = require('express')
const task = require('./task');
const userRouter = require('./middleware');

const app = express()
const port = 4000;

app.use(express.static('pages'))

app.get('/',task.home);
app.get('/about',task.about);
app.use('/user', userRouter);

app.listen(port,()=>{
    console.log(`CommonJS Server: http://localhost:${port}`)
})