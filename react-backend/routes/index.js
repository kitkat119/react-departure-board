var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.render('index', { title: 'Cannon Street' });

  res.json({sender: 'server', greeting: 'Hello from your API!'});

});

module.exports = router;
