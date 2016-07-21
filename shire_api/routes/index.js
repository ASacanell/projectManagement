"use strict";
/// <reference path="../../typings/index.d.ts" />
var express = require("express");
var bodyparser = require("body-parser");
var ctrlProjects = require("../controllers/projects.ts");
var ctrlTasks = require("../controllers/tasks.ts");
// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = express.Router();
exports.router = router;
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
    extended: true
}));
// Project requests
router.get('/projects', ctrlProjects.projectsGetN);
router.get('/projects/:projectid', ctrlProjects.projectsRead);
router.post('/projects/:projectid', ctrlProjects.projectsCreate);
router.put('/projects/:projectid', ctrlProjects.projectsUpdate);
router.delete('/projects/:projectid', ctrlProjects.projectsDelete);
// Tasks requests
router.get('/projects/:projectid/tasks', ctrlTasks.tasksGetN);
router.get('/projects/:projectid/tasks/:tasks', ctrlTasks.tasksRead);
router.post('/projects/:projectid/tasks/:tasks', ctrlTasks.tasksCreate);
router.put('/projects/:projectid/tasks/:tasks', ctrlTasks.tasksUpdate);
router.delete('/projects/:projectid/tasks/:tasks', ctrlTasks.tasksDelete);
//# sourceMappingURL=index.js.map