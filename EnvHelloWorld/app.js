require('EnvHelloWorld').config()

var express = require('express');
var app = express();

var secret = process.env.MESSAGE
app.get('/', function (req, res) {
  res.send('Hello World!'+ secret);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});