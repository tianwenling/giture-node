/**
 * Created by zhuang on 16/8/23.
 */
var express = require('express');
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }, //控制台输出
        {
            type: 'file', //文件输出
            filename: 'logs/access.log',
            maxLogSize: 1024*1000,
            backups:3,
            //与log4js.getLogger('normal')对应,当normal情况下写在日志文件中。
            category: 'normal'
        }
    ]
});
var logger = log4js.getLogger('normal');
logger.setLevel('trace');
logger.trace("trace");
logger.debug("debug");
logger.info('info');
logger.warn("warn");
logger.error("error");
logger.fatal("fatal");

var app = express();
app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));


exports.logger=function(name){
    var logger = log4js.getLogger(name);
    logger.setLevel('INFO');
    return logger;
}
