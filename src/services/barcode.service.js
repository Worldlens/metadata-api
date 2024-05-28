const { barcodeRepository } = require("../models");
const { BadRequestError } = require("../core/error.response");

class BarcodeService {
    static getAll = async () => {
        const foundBarcode = await barcodeRepository.findMany({
            filter: {},
        });
        return foundBarcode;
    };

    static create = async ({ country, start, end, barcode }) => {
        const createdBarcode = await barcodeRepository.create({
            country,
            start,
            end,
            barcode,
        });
        return createdBarcode;
    };

    static checkBarCode = async ({ barcode }) => {
        const barcodeNum = parseInt(barcode.slice(0, 3));
        const barcodeData = await barcodeRepository.findOne({
            filter: {
                barcode: barcodeNum,
            },
        });
        if (!barcodeData || barcodeData.length == 0)
            throw new BadRequestError("Barcode not found");

        return barcodeData;
    };
}

module.exports = BarcodeService;
