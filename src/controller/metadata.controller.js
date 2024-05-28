const MetadataService = require("../services/metadata.service");
const { OKResponse, CreatedResponse } = require("../core/success.response");

class MetadataController {
    create = async (req, res, next) => {
        return new CreatedResponse({
            message: "Create Metadata success",
            data: await MetadataService.create(req.body),
        }).send(res);
    };

    updateVerify = async (req, res, next) => {
        const { verified } = req.body;
        const { nftId } = req.params;
        return new OKResponse({
            message: "Verify success",
            data: await MetadataService.verify({ verified, nftId }),
        }).send(res);
    };
}

module.exports = new MetadataController();
