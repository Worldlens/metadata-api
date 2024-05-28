import { ProductModel } from "../schema/mongoose.js";

const productController = {
    get: async (req, res) => {
        const product = {
            code: 8809125048172,
            name: "Coca Cola",
            images: [
                "https://www.coca-cola.com.sg/content/dam/journey/sg/en/private/stories/history/2016/2016-12-08-coca-cola-130th-anniversary/130th-anniversary-1.jpg",
            ],
            description:
                "This is the first sentence describing the product. The second sentence further elaborate the details. Maximum 3 sentences to be displayed on preview...",
            explorer:
                "https://explorer.solana.com/tx/3e4KH18bqa4SBcdD89vFgfC9xJSTiMgtzHbACA2uQn74KG1VLGqrJFVtN5qyNm8RKAdZyUXVFRcXGA3jEVUrJFcE",
        };
        res.sendData({ product });
    },
    post: async (req, res) => {
        const product = {
            code: Math.round(Math.random() * 1000000 + 100000),
            name: "Coca Cola",
            images: [
                "https://www.coca-cola.com.sg/content/dam/journey/sg/en/private/stories/history/2016/2016-12-08-coca-cola-130th-anniversary/130th-anniversary-1.jpg",
            ],
            description:
                "This is the first sentence describing the product. The second sentence further elaborate the details. Maximum 3 sentences to be displayed on preview...",
            explorer:
                "https://explorer.solana.com/address/HUBEJgHxH3xGd2QigBzQe3xJzFpGKWXNEDyd4m4iF6zN/metadata?cluster=devnet",
        };c
        await ProductModel.create(project);
        res.sendData({ barcode: "post", ...product });
    },
    getByCode: async (req, res, next) => {
        const { code } = req.query;
        const product = await ProductModel.find({ code });
        res.sendData(product);
    },
};

export default productController;
