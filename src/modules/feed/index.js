// import express from 'express';
// import FeedController from './feedController';

const express = require('express');
// const FeedController =require('./feedController');

const FeedController = require('./feedController');

const router = express.Router();

router.get('/feed', FeedController.getFeed);
router.get('/feed/:id', FeedController.getOneFeed);
router.post('/feed', FeedController.postFeed);
router.put('/feed/:id', FeedController.approve);
router.delete('/feed/:id', FeedController.deleteFeed);
router.delete('/feed', FeedController.deleteAllFeeds);

// export default router;
module.exports = router