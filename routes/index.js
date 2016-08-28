var express = require('express');
var router = express.Router();
var request = require('request');
var nodeFetchUtil = require('../util/nodeFetchUtil');
var common = require('../common/config');
var logger = require('../common/logs').logger('normal');
var fetch = require('node-fetch');


// router.param('id', /^\d+$/);
/* GET home page. */

// router.get('/*', function(req, res, next) {
//   req.user = req.params[0];
//   //匹配下一个符合规则的路由
//   next();
//   // res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('start');    
});
router.get('/demo', function(req, res, next) {
  //TODO:异步的调整...
  nodeFetchUtil.body('http://localhost/order/1');
  nodeFetchUtil.json('http://localhost/order/1');

});
router.get('/404', function(req, res, next) {
  logger.info(common);
  common.nickName=404;
  res.render('404',common);
});
router.get('/mine', function(req, res, next) {
  res.render('mine');
});
router.get('/lock', function(req, res, next) {
  res.render('lockScreen');
});
router.get('/500', function(req, res, next) {
  res.render('500');
});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});


module.exports = router;
