// import express from 'express'
// import PeopleController from './PeopleController'
// import passport from 'passport';

const express = require('express');
const PeopleController = require('./PeopleController');
const passport = require('passport');

const router = express.Router()

// router.get('/people', passport.authenticate('jwt', { session: false }), PeopleController.getPeople)
router.get('/people', PeopleController.getPeople)
router.get('/people/:id', PeopleController.getOnePerson)
router.post('/people', PeopleController.postPeople)
router.put('/people/:id', PeopleController.updatePeople)
router.delete('/people/:id', PeopleController.deletePeople)

// export default router

module.exports = router
