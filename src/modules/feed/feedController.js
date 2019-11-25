// import models from '../../database/models';
const models = require('../../database/models');
class FeedController{
    static async postFeed(req, res){
        console.log("feed here ++++++++++++");
        try{
            // const userId = await models.User.findOne({where: {
            //     email: 
            // }})
            console.log("+++", req.body);
            const data = {
                title: req.body.title,
                feed: req.body.feed,
                picUrl: req.body.imageUrl
            }
            const response = await models.Feed.create(req.body)
            console.log("response here ++++++++++++", response);
            return res.json({"message":'Story created'})
        }catch(err){
            console.log("err here ++++++++++++", err);
            return res.json(err)
        }
    }
    static async getFeed(req, res){
        try{
            const feedData = await models.Feed.findAll({
                order: [
                ['id', 'DESC'],], limit: 10,
                where: {
                    approved: true
                }
            })
            return res.json(feedData);
        }catch(err){
            return res.json(err)
        }
    }

    //get feed for dashboard
    static async getFeedForDashboard(req, res){
        try{
            const feedData = await models.Feed.findAll({
                order: [
                ['id', 'DESC'],],
                where: {
                    approved: false
                }
            })
            return res.json(feedData);
        }catch(err){
            return res.json(err)
        }
    }

    //get one feed

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