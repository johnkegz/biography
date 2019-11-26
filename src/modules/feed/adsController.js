const models = require('../../database/models');

class AdsController{
    static async postAd(req, res){
        console.log("feed here ++++++++++++ Das");
        try{
            console.log("+++ Ads", req.body);
            const response = await models.Ads.create(req.body)
            console.log("response here ++++++++++++", response);
            return res.json({"message":'Ad created'})
        }catch(err){
            console.log("err here ++++++++++++ Ads ++", err);
            return res.json(err)
        }
    }

    static async getAds(req, res){
        try{
            const AdsData = await models.Ads.findAll({
                limit: 10, order: [
                    ['id', 'DESC'],],
            })
            return res.json(AdsData);
        }catch(err){
            return res.json(err)
        }
    }
}

module.exports = AdsController;