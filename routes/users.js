const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users page');
});

module.exports = router;