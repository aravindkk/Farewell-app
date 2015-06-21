var express = require('express');
var app=express();

var bodyParser=require('body-parser');

var fs=require('fs');

var application_root=__dirname,
    path=require('path');

app.use(bodyParser());
app.use(express.static(application_root));

var http=require('http');
var server=http.createServer(app);



app.get('/', function(req,res){
	res.sendfile('index.html');
});

var port=process.env.PORT || 5000;
server.listen(port);
console.log("Listening on "+port);