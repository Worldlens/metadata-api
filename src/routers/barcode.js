"use strict";

const express = require("express");
const barcodeController = require("../controller/barcode.controller");
const { asyncHandler } = require("../helper");
const router = express.Router();

router.post("/", asyncHandler(barcodeController.createBarCode));
router.get("/", asyncHandler(barcodeController.getAll));
router.get("/check", asyncHandler(barcodeController.checkBarCode));
module.exports = router;
