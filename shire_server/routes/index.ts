/// <reference path="../../typings/index.d.ts" />
import * as express from "express";
import * as bodyparser from "body-parser";
import ctrlProjects = require("../controllers/projects.ts");

// import * as mongoose from "mongoose";
// var app: express.Application = express();
var router = express.Router();

// const router: Router = Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
	extended: true
}));

router.get("/", ctrlProjects.projectOverview);

export { router };