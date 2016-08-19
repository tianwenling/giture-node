/**
 * Created by zhuang on 16/8/20.
 */
var users = require('../routes/blog')

var blogService = {};



//load blog information from dataBase
blogService.loadUser = function (blogId,req, res, next){
    var blogId = req.params.blogId || blogId;
    blogService.verifyUser(blogId)
    //todo:load...
}

// verify blog from dataBase
blogService.verifyUser = function (blogId){
    //todo://verify...

}

module.exports = blogService;