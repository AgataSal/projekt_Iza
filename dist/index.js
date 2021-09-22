"use strict";

var _nodeJsonDb = require("node-json-db");

var _JsonDBConfig = require("node-json-db/dist/lib/JsonDBConfig");

var express = require('express');

var port = process.env.PORT || 8000;
var db = new _nodeJsonDb.JsonDB(new _JsonDBConfig.Config("db", true, false, '/'));
var app = express();
app.use(express["static"]('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
  res.render('index', {});
});
app.listen(port);
console.log("Server running...");