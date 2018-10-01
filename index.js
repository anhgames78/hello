var express = require("express");
var app = express();
app.listen(8080);

app.get("/hello", function (req, res){
res.send("<font color=red>Hello Nodejs</font>");
});
