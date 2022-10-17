const express = require('express');
const router = express.Router();

const ArtistController = require('./controllers/ArtistController');
const AlbumController = require('./controllers/AlbumController');

router.get('/artists', ArtistController.ListArtists);
router.get('/artist/:slug', ArtistController.ShowArtist);

router.get('/albums', AlbumController.ListAlbums);
router.get('/album/:slug', AlbumController.ShowAlbum);

module.exports = router;

