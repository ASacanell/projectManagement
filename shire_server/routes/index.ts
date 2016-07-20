/// <reference path="../../typings/index.d.ts" />
import { Router } from "express";
import * as bodyparser from "body-parser";
import ctrlProjects = require("../controllers/projects.ts");

// import * as mongoose from "mongoose";
// var app: express.Application = express();
var routerProjects = Router();

// const routerProjects: Router = Router();
routerProjects.use(bodyparser.json());
routerProjects.use(bodyparser.urlencoded({
	extended: true
}));

routerProjects.get("/", ctrlProjects.projectOverview);

export {routerProjects}