"use strict";

const express = require("express");
const metadataController = require("../controller/metadata.controller");
const { asyncHandler } = require("../helper");
const router = express.Router();

router.post("/", asyncHandler(metadataController.create));
router.post("/:nftId", asyncHandler(metadataController.updateVerify));
module.exports = router;
