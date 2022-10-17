const express = require('express');
const router = express.Router();

const ArtistController = require('./controllers/ArtistController');

router.get('/artist/:slug', ArtistController.ShowArtist);

module.exports = router;

