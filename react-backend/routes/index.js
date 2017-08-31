var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  request("http://transportapi.com/v3/uk/train/station/CST/live.json?type=departure&app_id=88e9b09b&app_key=b67f9c0a642d1931247492f109f1d561", function(error, response, body) {
    data = body;
    console.log(data);
  });
  // res.render('index', { title: 'Cannon Street' });
  res.json(data);

});

module.exports = router;
