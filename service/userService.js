/**
 * Created by zhuang on 16/8/20.
 */
var users = require('express')
var users = require('../routes/users')

var userService = {};

//load User information from dataBase -->cookie ?username :-->  call JAVA API-->return information
userService.loadUser = function (username, req, res, next) {
    var username = req.params.username || username;
    userService.verifyUser(username)
    //todo:load...
}


// verify User from dataBase
userService.verifyUser = function (username) {
    //todo://verify...
}


module.exports = userService;