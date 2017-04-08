/**
 * Created by lipeishang on 17-4-8.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.send("com here");
});

router.get('/com',function (req,res) {
    res.send("com com here");
});

module.exports = router;