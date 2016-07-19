"use strict";
var express_1 = require("express");
var routerAPI = express_1.Router();
exports.routerAPI = routerAPI;
routerAPI.get("/", function (req, res) {
    res.json({
        title: "Protected call",
        text: "Welcome to API"
    });
});
//# sourceMappingURL=api.js.map