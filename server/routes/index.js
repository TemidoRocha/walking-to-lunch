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

router.get('/hikings/:name', routeGuard, (req, res, next) => {
  res.json({});
});
router.post('/hikings', routeGuard, (req, res, next) => {
  HikingSpots.create({
    name: req.body.name,
    coordinates: req.body.coordinates,
    code: req.body.code,
    typology: req.body.typology,
    distance: req.body.distance,
    measure: req.body.measure,
    duration: req.body.duration,
    dificulty: req.body.dificulty,
    searchWords: req.body.searchWords,
    url: req.body.url,
    operator: req.user._id,
  })
    .then((workspace) => {
      res.json(workspace);
    })
    .catch((error) => {
      res.json(error);
    });
});
router.put('/hikings', routeGuard, (req, res, next) => {
  res.json({});
});
router.delete('/hikings', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
