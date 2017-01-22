var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')

var app = express()

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./bundle'));

app.use('/', require('./routes'))

app.listen(4000);
