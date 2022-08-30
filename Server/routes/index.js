var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/opa', function(req, res, next) {
  res.json({ime: "Kerim"});
});



module.exports = router;
