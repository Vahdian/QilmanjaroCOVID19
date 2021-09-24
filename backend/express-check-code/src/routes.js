const express = require("express");
const controller = require("./controllers/controller")
const router = express.Router();

router.route("/user/:id").get(controller.getOneData)

router.route("/validate").post(controller.validateData)

module.exports = router