var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var session = require('express-session');
app.use(session({secret:'codingdojo'}));
app.use(express.static( __dirname + '/newApp/dist' ));


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./newApp/dist/index.html"))
  });

app.listen(8001, function(){
    console.log("listening on port 8001");
})