// import models from '../../database/models';
const models = require('../../database/models');
class FeedController{
    static async postFeed(req, res){
        try{
            const data = {
                title: req.body.title,
                feed: req.body.feed,
                picUrl: req.body.imageUrl
            }
            await models.Feed.create(req.body)
            return res.json({"message":'Story created'})
        }catch(err){
            return err
        }
    }
    static async getFeed(req, res){
        const feedData = await models.Feed.findAll()
        return res.json(feedData);
    }
}

// export default FeedController;
module.exports = FeedController