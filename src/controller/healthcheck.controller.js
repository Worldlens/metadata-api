const HealcheckService = require("../services/healcheck.service");
const { OKResponse, CreatedResponse } = require("../core/success.response");

class HealCheckController {
    get = (req, res) => {
        return new OKResponse({
            message: "Healcheck get",
            data: HealcheckService.get(),
        }).send(res);
    };

    post = (req, res) => {
        return new OKResponse({
            message: "Healcheck post",
            data: HealcheckService.post(),
        }).send(res);
    };
}

module.exports = new HealCheckController();
