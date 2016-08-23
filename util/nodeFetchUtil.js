/**
 * Created by zhuang on 16/8/24.
 */

var fetch = require('node-fetch');
var logger = require('../common/logs').logger('normal');
var nodeFetchUtil = {};

// if you are on node v0.10, set a Promise library first, eg.
// fetch.Promise = require('bluebird');

// plain text or html
nodeFetchUtil.body = function (url) {
    fetch(url)
        .then(function (res) {
            return res.text();
        }).then(function (body) {
        console.log(body);
    });
};
// json
nodeFetchUtil.json = function (url) {
    fetch(url)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
        logger.debug(json);

    });
};
// stream
// the node.js way is to use stream when possible
nodeFetchUtil.stream = function () {
    fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
        .then(function (res) {
            var dest = fs.createWriteStream('./octocat.png');
            res.body.pipe(dest);
        });
};
// // buffer
// // if you prefer to cache binary data in full, use buffer()
// // note that buffer() is a node-fetch only API
//
// var fileType = require('file-type');
// fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
//     .then(function(res) {
//         return res.buffer();
//     }).then(function(buffer) {
//     fileType(buffer);
// });
//
// // meta
//
// fetch('https://github.com/')
//     .then(function(res) {
//         console.log(res.ok);
//         console.log(res.status);
//         console.log(res.statusText);
//         console.log(res.headers.raw());
//         console.log(res.headers.get('content-type'));
//     });
//
// // post
//
// fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' })
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//     console.log(json);
// });
//
// // post with stream from resumer
//
// var resumer = require('resumer');
// var stream = resumer().queue('a=1').end();
// fetch('http://httpbin.org/post', { method: 'POST', body: stream })
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//     console.log(json);
// });
//
// // post with form-data (detect multipart)
//
// var FormData = require('form-data');
// var form = new FormData();
// form.append('a', 1);
// fetch('http://httpbin.org/post', { method: 'POST', body: form })
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//     console.log(json);
// });
//
// // post with form-data (custom headers)
// // note that getHeaders() is non-standard API
//
// var FormData = require('form-data');
// var form = new FormData();
// form.append('a', 1);
// fetch('http://httpbin.org/post', { method: 'POST', body: form, headers: form.getHeaders() })
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//     console.log(json);
// });
//
// // node 0.12+, yield with co
//
// var co = require('co');
// co(function *() {
//     var res = yield fetch('https://api.github.com/users/github');
//     var json = yield res.json();
//     console.log(res);
// });

module.exports = nodeFetchUtil;