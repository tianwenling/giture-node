var express = require('express');
var router = express.Router();
var fetchUrl = require('fetch').fetchUrl;
var userService = require('../service/userService');
var logger = require('../common/logs').logger('normal');

var UserResult = [];

/* GET users listing. */
router.get('/:username', function (req, res, next) {
  var username = req.params.username;
  console.log(username)
  userService.loadUser(username,req, res, next,function(data){
    res.render('start',{nickName:data.nickName});
  });
});


module.exports = router;
