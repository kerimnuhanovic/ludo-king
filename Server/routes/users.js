var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("EVO ME")
  res.json({ime:"Kerim"});
});

module.exports = router;
