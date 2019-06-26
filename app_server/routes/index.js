var express = require('express');
var router = express.Router();

var ctrlFeature = require('../controllers/feature');
var ctrlArticle = require('../controllers/article')
var ctrlNextUp = require('../controllers/nextUp');
var ctrlTrending = require('../controllers/trending');
var ctrlArtistsAlley = require('../controllers/artistsAlley');
var ctrlIntoTheLyrics = require('../controllers/intoTheLyrics');
var ctrlHistory = require('../controllers/history');
var ctrlTalk = require('../controllers/realTalk');

/* GET all pages. */
router.get('/', ctrlFeature.feature);
router.get('/article', ctrlArticle.article)
router.get('/nextUp', ctrlNextUp.nextUp);
router.get('/trending', ctrlTrending.trending);
router.get('/artistsAlley', ctrlArtistsAlley.artistsAlley);
router.get('/intoTheLyrics', ctrlIntoTheLyrics.intoTheLyrics);
router.get('/history', ctrlHistory.history);
router.get('/realTalk', ctrlTalk.realTalk);

module.exports = router;
