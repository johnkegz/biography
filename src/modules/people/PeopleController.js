import models from '../../database/models'

class PeopleController {
    static async getPeople (req, res) {
        try{
            const people = await  models.Person.findAll()
            console.log('People++++++++', people);
            return res.send('People++++++++')
        }
        catch(err){
            console.log('err++++++++', err);
        }
    }
}
export default PeopleController