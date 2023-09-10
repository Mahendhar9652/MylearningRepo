/*var url = require('url');
var adr ="https://www.flipkart.com/";

var q = url.parse(adr,true);
console.log(q);


var http = require('http');
var uc = require('upper-case');

http.createServer((req,res)=>{
    res.write(uc.upperCase("hello"));
    res.end();
    console.log("started");
}).listen(8080);


var nodemailer =require('nodemailer');

var transoprter =nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mahendhar96522@gmail.com',
        pass:'Mahendhar@9652'
    }

})

var options ={
    from:"mahendhar96522@gmail.com",
    to:"padmamahendhar96@gmail.com",
    subject:"testoimg",
    text:'easy'
}


transoprter.sendMail(options,(err,info)=>{
    if(err){
    console.log(err);
    }else{
        console.log("sent "+info);
    }
})*/

var events =require('events');
var eventEmitter = new events.eventEmitter();

