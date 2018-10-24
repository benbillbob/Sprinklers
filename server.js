var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes.init(app, express);
  
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);