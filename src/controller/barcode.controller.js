const BarcodeService = require("../services/barcode.service");
const { OKResponse, CreatedResponse } = require("../core/success.response");

class BarcodeController {
    getAll = async (req, res, next) => {
        return new OKResponse({
            message: "Get all barcode success",
            data: await BarcodeService.getAll(),
        }).send(res);
    };

    createBarCode = async (req, res, next) => {
        return new CreatedResponse({
            message: "Create bar code success",
            data: await BarcodeService.create(req.body),
        }).send(res);
    };

    checkBarCode = async (req, res, next) => {
        const { barcode } = req.query;
        return new OKResponse({
            message: "Check barcode success",
            data: await BarcodeService.checkBarCode({ barcode }),
        }).send(res);
    };
}

module.exports = new BarcodeController();
