var express = require('express');
var router = express.Router();
var cmmonFetch = require('../util/cmmonFetch');
var blogService = require('../service/blogService');


/* GET users listing. */
router.get('/:blogId', function(req, res, next) {
  var blogId = req.params.username;
  blogService.loadUser(blogId,req, res, next);
  res.send('mine',UserResult);
});

module.exports = blog;
