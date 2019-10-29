// import express from 'express';
// import registerUser from './register' 
// import loginUser from './login'

const express = require('express');
const registerUser = require('./register');
const loginUser = require('./login');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// export default router;
module.exports = router
