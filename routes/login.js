const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login page');
});
router.post('/', usersController.login)

module.exports = router;
