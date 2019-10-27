import express from 'express';
import FeedController from './feedController';

const router = express.Router();

router.get('/feed', FeedController.getFeed);

export default router;