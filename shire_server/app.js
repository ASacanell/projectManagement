"use strict";
/// <reference path="../typings/index.d.ts" />
var express = require("express");
var path_1 = require("path");
var favicon = require("serve-favicon");
var body_parser_1 = require("body-parser");
var routerAPI = require("../shire_api/routes/index.ts");
var app = express();
exports.app = app;
app.disable("x-powered-by");
app.use(favicon(path_1.join(__dirname, "../public", "favicon.ico")));
// From here ExpressJS takes index.html('index' atrib default)
app.use(express.static(path_1.join(__dirname, '../public')));
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
// api routes
app.use("/api", routerAPI.router);
// Internal path to client app (used in systemjs.config.js)
app.use('/client', express.static(path_1.join(__dirname, '../shire_client')));
// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(express.static(path_1.join(__dirname, '../node_modules')));
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
//# sourceMappingURL=app.js.map