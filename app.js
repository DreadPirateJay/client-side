/*global require,console*/

var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/clients', function (req, res) {
    res.send('Hello Clients!');
});

app.listen(port, function (err) {
    'use strict';
    console.log('running server on port ' + port);
});