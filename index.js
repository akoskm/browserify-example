var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/www');
console.log(staticPath);
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});