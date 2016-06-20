/* console.log('hello' + process.env.NODE_ENV + ' lato server');

 var myModule = require('./exercises/myModule')();        // pattern relativo ./ cerca il contenuto nelle mie cartelle
                                                        // per ottenere l'oggetto che si trova nella funzione, mettiamo le parentesi alla fine di require
//console.log(myModule.sayHello('David'));


var http = require('http');

var server = http.createServer(function (req, res){
   res.write('<h1> Server funzionane </h1>');
   res.end();
   
   server.listen(8080, '0.0.0.0', function(){
      console.log('ok nel server'); 
   });
}); 

var express = require('express');
var app = express();

//console.log(req); quello che parte da noi e avvira al server

var users = require('./exercises/users'); // passo il modulo router

app.use('/users', users.router);

var  items = require('./exercises/users');
app.use('/items', items.router);

app.get('/reverse/:string', function (req, res){
   var input = req.params.string;
   var output = input.split('').reverse().join('');
   if(req.query.uppercase) output = output.toUpperCase();
   if(req.query.spaced) output = output.split('').join('');
   res.send(output);
});

app.listen(8080, function (){
   console.log('server express attivo'); 
}); */

