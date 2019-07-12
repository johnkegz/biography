import express from 'express'
import PeopleController from './PeopleController'

const router = express.Router()

router.get('/people', PeopleController.getPeople)
router.get('/people/:id', PeopleController.getOnePerson)
router.post('/people', PeopleController.postPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.deletePeople)
module.exports = router