"use strict";

const express = require("express");
const healcheckController = require("../controller/healthcheck.controller");
const { asyncHandler } = require("../helper");
const router = express.Router();

router.get("/", asyncHandler(healcheckController.get));
router.post("/", asyncHandler(healcheckController.post));
module.exports = router;
