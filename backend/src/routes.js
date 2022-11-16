const express = require('express');
const router = express.Router();

const ArtistController = require('./controllers/ArtistController');
const AlbumController = require('./controllers/AlbumController');
const VersionController = require('./controllers/VersionController');
const ProductController = require('./controllers/ProductController');
const ImgProductController = require('./controllers/ImgProductController');
const FormatController = require('./controllers/FormatController');

router.get('/artists', ArtistController.ListArtists);
router.get('/artist/:slug', ArtistController.ShowArtist);

router.get('/albums/:artist', AlbumController.ListAlbums);
router.get('/album/:slug', AlbumController.ShowAlbum);

router.get('/versions/by/:artist', VersionController.ListVersionsByArtist);
router.get('/versions/:album', VersionController.ListVersionsByAlbum);

router.get('/products/:album', ProductController.ListProductsByAlbum);

router.get('/images/products/:album', ImgProductController.ListImgProductsByAlbum);

router.get('/formats', FormatController.ListFormats);
router.get('/format/albums/:format', FormatController.ListAlbumsByFormat);
router.get('/format/versions/:format', FormatController.ListVersionsByFormat);
router.get('/format/artists/:format', FormatController.ListArtistsByFormat);

module.exports = router;

