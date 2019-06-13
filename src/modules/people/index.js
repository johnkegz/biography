import express from 'express'
import PeopleController from './PeopleController'

const router = express.Router()

router.get('/people', PeopleController.getPeople)
router.post('/people', (req, res) =>{
    res.send("Posting.......")
})
module.exports = router