/// <reference path="../typings/index.d.ts" />
import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";

import { routerAPI } from "./routes/api";
import { router } from "./routes/client";

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
// From here ExpressJS takes index.html('index' atrib default)
app.use(express.static(join(__dirname, '../public'))); 

app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", routerAPI);
app.use("/", router);
// Internal path to client app (used in systemjs.config.js)
app.use('/client', express.static(join(__dirname, '../shire_client'))); 

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, '../node_modules')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
