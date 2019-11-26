// import express from 'express';
// import FeedController from './feedController';

const express = require('express');
// const FeedController =require('./feedController');

const FeedController = require('./feedController');
const AdsController = require('./adsController');

const router = express.Router();

router.get('/feed', FeedController.getFeed);
router.get('/dashboard/feed', FeedController.getFeedForDashboard);
router.get('/feed/:id', FeedController.getOneFeed);
router.post('/feed', FeedController.postFeed);
router.put('/feed/:id', FeedController.approve);
router.delete('/feed/:id', FeedController.deleteFeed);
router.delete('/feed', FeedController.deleteAllFeeds);
router.post('/ads', AdsController.postAd);
router.get('/ads', AdsController.getAds);

// export default router;
module.exports = router