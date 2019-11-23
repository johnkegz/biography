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
            return res.json(err)
        }
    }
    static async getFeed(req, res){
        try{
            const feedData = await models.Feed.findAll({
                order: [
                ['id', 'DESC'],], limit: 10,
                where: {
                    approved: false
                }
            })
            return res.json(feedData);
        }catch(err){
            return res.json(err)
        }
    }

    static async getOneFeed(req, res){
        try{
            const feed = await models.Feed.findByPk(req.params.id);
            return res.json(feed);
        }
        catch(err){
            return res.json(err)
        }
    }

    /** Delete feed
     * params id
    */
   static async deleteFeed(req, res){
       const deleteResponse = await models.Feed.destroy({
           where:{
               id: req.params.id
           }
       });
       return res.json({"result":deleteResponse})
   }

    /** Delete all feed
     * params id
    */
   static async deleteAllFeeds(req, res){
    
    const deleteResponse = await models.Feed.destroy({where: {},
        truncate: true});
    return res.json({"result":deleteResponse})
}


//Approve
static async approve(req, res){
    try{
        console.log("approved +++++++++")
        const feedId = req.params.id;
        console.log("approved +++++++++ feedId", feedId)
    const response = await models.Feed.update({
        approved: true
      }, {where:{
          id: feedId
      }}).catch((err)=>{console.log("approved +++++++++ err", err)})
      console.dir(response)
      console.log("approved +++++++++ response", response)

        return res.json({"message":'Story approved'})
    }catch(err){
        console.log("approved +++++++++ error", err)
        return res.json(err)
    }
}

}

// export default FeedController;
module.exports = FeedController