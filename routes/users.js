var express = require('express');
var router = express.Router();
var fetchUrl = require('fetch').fetchUrl;
var userService = require('../service/userService')

var UserResult = [];

/* GET users listing. */
router.get('/:username', function (req, res, next) {
  var username = req.params.username;
  userService.loadUser(username,req, res, next);
  res.send('mine',UserResult);
});


module.exports = router;
