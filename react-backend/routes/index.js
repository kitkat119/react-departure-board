var express = require('express');
var router = express.Router();
var request = require("request");
var data = {sender: 'server', greeting: 'Hello'};


setInterval(function() {
  request("http://transportapi.com/v3/uk/train/station/CST/live.json?type=departure&app_id=" + process.env.APP_ID + "&app_key=" + process.env.APP_KEY, function(error, response, body) {
    data = body;
    console.log(data);
  });
}, 10000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.render('index', { title: 'Cannon Street' });
  res.json(data);
});

module.exports = router;
