const multer = require("multer");
const path = require("path");

const uploads = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./public/images");
        },
        filename: function (req, file, cb) {
            cb(null, `images-${Date.now()}` + path.extname(file.originalname));
        },
    }),
});

module.exports = uploads;
