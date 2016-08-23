/**
 * Created by zhuang on 16/8/20.
 */
var users = require('express')
var users = require('../routes/users')
var logger = require('../common/logs').logger('normal')

var userService = {};

//load User information from dataBase -->cookie ?username :-->  call JAVA API-->return information
userService.loadUser = function (username, req, res, next,cbdata) {
    var username = req.params.username || username;
    logger.debug("loadUser...");
    if(userService.verifyUser(username)){
        logger.debug("loadUser...");
         var userData = {
             nickName :"six.nonacosa"
         }
         cbdata(userData);
    }

    //todo:load...
}


// verify User from dataBase
userService.verifyUser = function (username) {
    //todo://verify...
    logger.debug("todo 验证username状态 并返回nickname")
    return true;
}


module.exports = userService;