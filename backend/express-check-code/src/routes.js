const express = require("express");
const controller = require("./controllers/controller")
const router = express.Router();

router
    .route("/api/user")
    .get(controller.getData)

module.exports = router