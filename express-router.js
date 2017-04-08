/**
 * Created by lipeishang on 17-4-8.
 */
var express = require('express');
var app = express();

app.get('/',function (req,res) {
    res.send('hello world');
});

app.get('/demo', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});

app.listen(3000,function () {
    console.log('Server start!');
});


