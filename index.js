var express = require("express");
var app = express();
app.listen(3000);

app.get("/hello/:id", function (req, res){
var i = req.params.id;
res.send("<font color=blue>Hello Nodejs. </font>"+"<font color=red>Server nhan id="+i+"</font>");
});
app.get("/hello", function (req, res){
res.send("<font color=red>Hello Nodejs.</font>");
});
