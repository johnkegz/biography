import express from 'express';
import registerUser from './register' 
import loginUser from './login' 

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
