var express = require('express');
var path = require('path');
var open = require('open');


var port = 3000;

//create an instance of express
var app = express()

//tell express which routes it should handle
app.get('/', function(req,res){ //handles any references to /
  //look at the url then send the file we are requesting
  res.sendFile(path.join(__dirname, '../src/index.html'))

})
app.listen(port, function(err){
  if(err){
    console.log(err)
  }else{
    open(`http://localhost:${port}`)
  }
})
