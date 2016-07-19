"use strict";
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get("/", function (req, res) {
    res.json({
        text: "ProjectManager",
        title: "Welcome"
    });
});
//# sourceMappingURL=client.js.map