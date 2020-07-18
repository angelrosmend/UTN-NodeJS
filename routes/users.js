const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.post('/registro', usersController.signup)
router.post('/login', usersController.login)
router.get('/', function(req, res, next) {
  res.send('Users page');
});

module.exports = router;