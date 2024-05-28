const Repository = require("./repository");

module.exports = {
    apiKeyRepository: new Repository(require("./apikey.model")),
    barcodeRepository: new Repository(require("./barcode.model")),
    productRepository: new Repository(require("./product.model")),
};
