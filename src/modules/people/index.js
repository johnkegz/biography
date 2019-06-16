import express from 'express'
import PeopleController from './PeopleController'

const router = express.Router()

router.get('/people', PeopleController.getPeople)
router.post('/people', PeopleController.postPeople)
module.exports = router