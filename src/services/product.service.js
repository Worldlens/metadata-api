const { productRepository } = require("../models");
const { BadRequestError } = require("../core/error.response");
const SolanaService = require("./solana/solana.service");
const MetadataService = require("./metadata.service");

class ProductService {
    static getAll = async () => {
        const products = await productRepository.findMany({
            filter: {},
        });
        return products;
    };

    static createProduct = async (req) => {
        const metadata = req.body;
        const images = req.files.map(
            ({ filename }) => `${process.env.HOST}/static/images/${filename}`
        );
        const explorerUrl = await SolanaService.mint({
            ...metadata,
            images,
        });
        const product = {
            code: metadata.code
                ? Number(metadata.code)
                : Math.round(Math.random() * 1000000 + 100000),
            name: metadata.name ? metadata.name : "Coca Cola",
            images: images
                ? images
                : [
                      "https://www.coca-cola.com.sg/content/dam/journey/sg/en/private/stories/history/2016/2016-12-08-coca-cola-130th-anniversary/130th-anniversary-1.jpg",
                  ],
            description: metadata.description
                ? metadata.description
                : "This is the first sentence describing the product. The second sentence further elaborate the details. Maximum 3 sentences to be displayed on preview...",
            manufactureCode: metadata.manufactureCode
                ? Number(metadata.manufactureCode)
                : Math.round(Math.random() * 10000 + 1000),
            explorer: explorerUrl,
        };
        await productRepository.create(product);
        return product;
    };

    static getByCode = async ({ code }) => {
        if (!code) throw new BadRequestError("Invalid barcode");
        const product = await productRepository.findOne({
            filter: { code },
        });
        if (!product) throw new BadRequestError("Invalid barcode");
        return product;
    };
}

module.exports = ProductService;
