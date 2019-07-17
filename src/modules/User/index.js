import express from 'express';
import registerUser from './register' 

const router = express.Router();

router.post('/register', registerUser);

export default router;
