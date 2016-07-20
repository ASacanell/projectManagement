"use strict";
/// <reference path="../../typings/index.d.ts" />
var express_1 = require("express");
//import * as bodyparser from "body-parser";
var ctrlProjects = require("../controllers/projects.ts");
var ctrlTasks = require("../controllers/tasks.ts");
// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = express_1.Router();
// Project requests
router.get('/projects', ctrlProjects.projectsGetN);
router.get('/projects/:projectid', ctrlProjects.projectsRead);
router.post('/projects/:projectid', ctrlProjects.projectsCreate);
router.put('/projects/:projectid', ctrlProjects.projectsUpdate);
router.delete('/projects/:projectid', ctrlProjects.projectsDelete);
// Tasks requests
router.get('/projects/:projectid/tasks', ctrlTasks.tasksGetN);
module.exports = router;
//# sourceMappingURL=index.js.map