const { v4: uuidV4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const removeHyphen = (str) => {
    let res = "";
    str.split("-").forEach((subStr) => {
        res = `${res}${subStr}`;
    });
    return res;
};

class MetadataService {
    static create = async ({ category, nftId, ...rest }) => {
        if (!category) {
            throw new BadRequestError("required field: /category/ ");
        } else {
            if (category.trim().length == 0) {
                throw new BadRequestError("/category/ can not be empty");
            }
        }
        fs.writeFileSync(
            `./public/metadata/${nftId}.json`,
            JSON.stringify({
                name: "BarCode",
                symbol: "BCode",
                description: "",
                category,
                ...rest,
                verified: 0,
            })
        );
        return `${process.env.HOST}/static/metadata/${nftId}.json`;
    };

    static verify = async ({ verified, nftId }) => {
        const path = `./public/metadata/${nftId}.json`;
        if (!fs.existsSync(path)) throw new BadRequestError("Invalid nftId");
        const fileContent = JSON.parse(fs.readFileSync(path));
        fs.writeFileSync(path, JSON.stringify(...fileContent, verified));
        return {
            ...fileContent,
            verified,
        };
    };
}

module.exports = MetadataService;
