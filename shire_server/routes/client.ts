import { Router, Response } from "express";

const router: Router = Router();

router.get("/", function(req, res) {
    res.json({
        text: "ProjectManager",
        title: "Welcome"
    });
});

export {router}