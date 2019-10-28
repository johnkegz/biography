import models from '../../database/models';
class FeedController{
    static async postFeed(req, res){
        try{
            console.log('req +++++++', req.body.imageUrl)
            const data = {
                title: req.body.knownfor,
                feed: req.body.bio,
                picUrl: req.body.imageUrl
            }
            await models.Feed.create(data)
            return 'posted'
        }catch(err){
            return err
        }
    }
    static async getFeed(req, res){
        const feedData = await models.Feed.findAll()
        return res.json(feedData);
    }
}

export default FeedController;