var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var inputfile = "index.html";
var buf = fs.readFileSync(inputfile);
var out = buf.toString("utf-8");

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
