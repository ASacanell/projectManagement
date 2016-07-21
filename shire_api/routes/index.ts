/// <reference path="../../typings/index.d.ts" />
import * as express from "express";
import * as bodyparser from "body-parser";
import ctrlProjects = require("../controllers/projects.ts");
import ctrlTasks = require("../controllers/tasks.ts");

// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = express.Router();

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

export { router }