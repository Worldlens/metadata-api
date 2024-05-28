"use strict";

const express = require("express");
const { apiKey, permission } = require("../middleware/apikey.middleware");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json("Oke");
});
router.use("/barcode", require("./barcode"))
router.use("/healcheck", require("./healcheck"))
router.use("/product", require("./product"))
router.use("/metadata", require("./metadata"));
module.exports = router;
