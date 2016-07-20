/// <reference path="../../typings/index.d.ts" />
import { Router } from "express";
//import * as bodyparser from "body-parser";
var ctrlProjects = require("../controllers/projects.ts");
var ctrlTasks = require("../controllers/tasks.ts");

// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = Router();

// Project requests
router.get('/projects', ctrlProjects.projectsGetN);
router.get('/projects/:projectid', ctrlProjects.projectsRead);
router.post('/projects/:projectid', ctrlProjects.projectsCreate);
router.put('/projects/:projectid', ctrlProjects.projectsUpdate);
router.delete('/projects/:projectid', ctrlProjects.projectsDelete);

// Tasks requests
router.get('/projects/:projectid/tasks', ctrlTasks.tasksGetN);

export = router;