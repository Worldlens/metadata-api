"use strict";

const express = require("express");
const productController = require("../controller/product.controller");
const { asyncHandler } = require("../helper");
const uploads = require("../middleware/multer.middleware");
const router = express.Router();

router.get("/", asyncHandler(productController.getAll));
router.get("/:code", asyncHandler(productController.getByCode));
router.post("/",uploads.array('images', 5), asyncHandler(productController.create));
module.exports = router;
