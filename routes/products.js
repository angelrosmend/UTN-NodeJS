var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Products get');
});
router.post('/', function(req, res, next) {
 res.send('Products post')
})

module.exports = router;
