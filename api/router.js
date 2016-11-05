const router = require('express').Router();
const colors = require('colors/safe');
const trackController = require('./controllers/TrackController').instance; //Sample controller
const bandController = require('./controllers/BandController').instance; //Sample controller

// Specific router middleware that shows the request timestamp
router.use((req, res, next) => {
    console.log(`${colors.green('Requesting: ')} ${req.method}  ${req.path}  -> Time: `, Date.now());
    next();
});

// API Routes
router.get('/tracks', trackController.getList); //Sample route
router.get('/bands', bandController.getList); //Sample route
router.get('/bands/:bandId/artists', bandController.getArtistById); //Sample route
router.get('/bands/:bandId', bandController.getById); //Sample route


module.exports = router;