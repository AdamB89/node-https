var express = require('express');
var https = require('https')
var fs = require('fs');
var path = require('path')

var options = {
    key: fs.readFileSync(path.join(__dirname,'bin','private.key')),
    cert: fs.readFileSync(  path.join(__dirname,'bin','certificate.pem'))
};


var app= express();

app.set('secPort',443);

app.use('/', (req,res)=>{
        res.send('<h1>Hello Nemesh</h1>')
})
var secureServer = https.createServer(options,app);

app.listen(3000,()=>{
    console.log('app running at port 3000')
})
//another comment
secureServer.listen(app.get('secPort'), () => {
    console.log('Server listening on port ',app.get('secPort'));
 });
 secureServer.on('error', ()=>{
     console.log("error")
 });
 secureServer.on('listening',()=>{
     console.log("start listening to secure port")
 });
