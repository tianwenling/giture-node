var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:blogId', function(req, res, next) {
  var blogId = req.params.username;
  router.loadUser(blogId,req, res, next);
  res.send('mine',UserResult);
});

//load blog information from dataBase
router.loadUser = function (blogId,req, res, next){
  var blogId = req.params.blogId || blogId;
  router.verifyUser(blogId)
  //todo:load...
}

// verify blog from dataBase
router.verifyUser = function (blogId){
  //todo://verify...

}
module.exports = blog;
