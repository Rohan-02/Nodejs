const express = require('express');

//modern express uses path
const path = require('path');
const app = express();

//middleware that converts rawdata to json
app.use(express.json());

//first route handler
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//about
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

//redirect route handler
app.get('/about-us',(req, res)=>{
    res.redirect('/about');
})

//not found middleware
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname});
})



app.listen(3000);