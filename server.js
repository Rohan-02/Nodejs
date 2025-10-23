//old school to import http
const http = require('http')

//ESModule
// import http from 'http';
// import fs from 'fs';
//to read files
const fs = require('fs');



const server = http.createServer((req, res)=>{
    
    console.log(req.url, req.method)

    res.setHeader('Content-Type','text/html');
    let path = './views/';

    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='404.html';
            break;
    }
    
    fs.readFile(path, (err, data)=>{
        if(err){
            res.end(err);
        }else{
            res.end(data);
        }
    })

})

server.listen(3000, ()=>{
    console.log('Listening to port 3000')
})