/**
 * Created by lipeishang on 17-4-8.
 */
var express = require('express');
var app = express();
var bird = require('./app/bird');
var com = require('./app/comhere');

app.use('/com',com);

app.use('/bird', bird);

app.get('/',function (req,res) {
    res.send('hello world');
});

app.get('/demo', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};

var cb2 = function (req, res) {
    res.send('Hello from C!');
};

app.get('/demo/a', [cb0, cb1, cb2]);



app.listen(3000,function () {
    console.log('Server start!');
});


