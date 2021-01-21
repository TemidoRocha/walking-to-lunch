'use strict';

const { Router } = require('express');
const { join } = require('path');
const router = new Router();
const routeGuard = require(join(__dirname, '../middleware/route-guard'));
const HikingSpots = require(join(__dirname, '../models/hikingSpots'));

router.get('/', (req, res, next) => {
  res.json({
    type: 'success',
    data: {
      msg: 'Welcome to Walk to Lunch',
      by: 'Manuel Rocha',
    },
  });
});

router.get('/all-hikings', (req, res, next) => {
  HikingSpots.find().then((allHikings) =>
    res.json({
      type: 'success',
      data: allHikings,
    })
  );
});

router.get('/downloadPdf/:url', (req, res, next) => {
  res.sendFile(req.params.url, {
    root: join(__dirname, '../public/hikesPdf'),
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
