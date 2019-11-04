// import models from '../../database/models'
// import { request } from 'http';
// import FeedController from '../feed/feedController';

const models = require('../../database/models');

class PeopleController {
    //Method getting all the members from the database
    static async getPeople (req, res) {
        try{
            const people = await  models.Person.findAll()
            return res.json(people)
        }
        catch(err){
            return res.json('Server err')
        }
    }

    //Method getting one member from the database
    static async getOnePerson (req, res) {
        try{
            const person = await  models.Person.findByPk(req.params.id)
            return res.json(person)
        }
        catch(err){
            return res.json('Server err')
        }
    }

    //Method posting people information to database
    static async postPeople (req, res){
        // continue with posting bio
        try{
        const checkForName = await models.Person.findOne({
            where: { name: req.body.name}
        })
        
        if(checkForName){
            console.log('name already exists ++++');
            return res.json('name already exists')
        }
        else{
            const postedPeople = await models.Person.create(req.body)
            return res.json(postedPeople)
        }
        
        }
        catch(err){
            return res.json(`server error ${err}`)
        }
    }

    //Update database
    static async updatePeople(req, res) {
        try{
            const updatedPeople = await models.Person.update({
                name: req.body.name,
                subject: req.body.subject,
                institution: req.body.institution,
                status: req.body.status,
                knownfor: req.body.knowfor,
                bio: req.body.bio
              }, {
                where: {
                  id: req.params.id
                }
              })
            return res.json(updatedPeople)
        }
        catch(err){
            return res.json(err)
        }
    }
    //Delete entry in database
    static async deletePeople(req, res) {
        const deletedPeople = await models.Person.destroy({
            where: {
            id: req.params.id
            }
        })
        return res.json(deletedPeople)
    }

}
// export default PeopleController
module.exports = PeopleController