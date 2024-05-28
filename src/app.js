require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();
const fs = require("fs");

(function () {
    if (!fs.existsSync("./public")) {
        fs.mkdirSync("./public");
    }
    if (!fs.existsSync("./public/metadata")) {
        fs.mkdirSync("./public/metadata");
    }
    if (!fs.existsSync("./public/images")) {
        fs.mkdirSync("./public/images");
    }
})();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/static", express.static("public"));
require("./db/init.mongodb");
app.use("/", require("./routers"));
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        message: error.message || "Interal Server error",
        stack: error.stack,
    });
});

module.exports = app;
