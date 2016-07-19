import { Router, Response } from "express";

const routerAPI: Router = Router();

routerAPI.get("/", function(req, res) {
    res.json({
        title: "Protected call",
        text: "Welcome to API"
    });
});

export {routerAPI}