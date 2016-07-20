"use strict";
/// <reference path="../../typings/index.d.ts" />
var express_1 = require("express");
var bodyparser = require("body-parser");
var ctrlProjects = require("../controllers/projects.ts");
// import * as mongoose from "mongoose";
// var app: express.Application = express();
var routerProjects = express_1.Router();
exports.routerProjects = routerProjects;
// const routerProjects: Router = Router();
routerProjects.use(bodyparser.json());
routerProjects.use(bodyparser.urlencoded({
    extended: true
}));
routerProjects.get("/", ctrlProjects.projectOverview);
//# sourceMappingURL=index.js.map