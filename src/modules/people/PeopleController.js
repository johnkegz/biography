import models from '../../database/models'

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
    //Method posting people information to database
    static async postPeople (req, res){
        try{
        const checkForName = await models.Person.findOne({
            where: { name: req.body.name}
        })
        if(checkForName){
            return res.json('name already exists')
        }
        else{
            const postedPeople = await models.Person.create(req.body)
            return res.json(req.body)
        }
        
        }
        catch(err){
            return res.json('server error ')
        }
    }

}
export default PeopleController