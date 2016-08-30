var express = require('express');
var router = express.Router();
var fetchUrl = require('fetch').fetchUrl;
var userService = require('../service/userService');
var logger = require('../common/logs').logger('normal');

var UserResult = [];

/* GET users listing. */
//打算采用第三方账号:微信、微博、github,吸引流量暂时不使用自注册
router.get('/:username', function (req, res, next) {
  var username = req.params.username;
  console.log(username)
  userService.loadUser(username,req, res, next,function(data){
    res.render('start',{nickName:data.nickName});
  });
});


module.exports = router;
