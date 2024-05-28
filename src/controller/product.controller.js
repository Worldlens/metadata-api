const ProductService = require("../services/product.service");
const { OKResponse, CreatedResponse } = require("../core/success.response");

class ProductController {
    create = async (req, res, next) => {
        return new CreatedResponse({
            message: "Create product success",
            data: await ProductService.createProduct(req),
        }).send(res);
    };

    getByCode = async (req, res, next) => {
        const { code } = req.params;
        return new OKResponse({
            message: "Get product by code success",
            data: await ProductService.getByCode({ code }),
        }).send(res);
    };

    getAll = async (req, res, next) => {
        return new OKResponse({
            message: "Get all product success",
            data: await ProductService.getAll(),
        }).send(res);
    };
}

module.exports = new ProductController();
