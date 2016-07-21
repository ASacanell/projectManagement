"use strict";
/// <reference path="../../typings/index.d.ts" />
var express = require("express");
var bodyparser = require("body-parser");
var ctrlProjects = require("../controllers/projects.ts");
// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = express.Router();
exports.router = router;
// const router: Router = Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
    extended: true
}));
router.get("/", ctrlProjects.projectOverview);
//# sourceMappingURL=index.js.map