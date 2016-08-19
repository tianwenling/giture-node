/**
 * this is in view of 'fetch' package common Function client HTTP to JAVA API
 * @auto Six.Nonacosa
 * @type {*|fetchUrl}
 */
var fetchUrl = require("fetch").fetchUrl;

var commonFetch = {};

/**
 *
 * @param url  --> it is only request address
 */
commonFetch.fetchURL = function (url){
  fetchUrl(url, function(error, meta, body){
    console.log(body.toString());
    return (error, meta, body);
  });
}
module.exports = commonFetch;
