const express = require('express');
const router = express.Router();

const ClientController = require('./controllers/ClientController');
const ArtistController = require('./controllers/ArtistController');
const AlbumController = require('./controllers/AlbumController');
const VersionController = require('./controllers/VersionController');
const ProductController = require('./controllers/ProductController');
const ImgProductController = require('./controllers/ImgProductController');
const FormatController = require('./controllers/FormatController');
const SearchController = require('./controllers/SearchController');

router.get('/artists', ArtistController.ListArtists);
router.get('/artist/:slug', ArtistController.ShowArtist);

router.get('/albums/preorder', AlbumController.ListPreOrderAlbums);
router.get('/albums/realeses', AlbumController.ListRealesesAlbums);
router.get('/albums/:artist', AlbumController.ListAlbums);
router.get('/album/:slug', AlbumController.ShowAlbum);

router.get('/versions/by/:artist', VersionController.ListVersionsByArtist);
router.get('/versions/:album', VersionController.ListVersionsByAlbum);

router.get('/products/:album', ProductController.ListProductsByAlbum);

router.get('/images/products/:album', ImgProductController.ListImgProductsByAlbum);

router.get('/formats', FormatController.ListFormats);
router.get('/format/:format', FormatController.ListFormat);

router.get('/product/detail/:artist/:album', ProductController.ListProductsDetails);

router.get('/user/:email', ClientController.LoginUser);
router.post('/user', ClientController.RegisterUser);

router.get('/search/:search', SearchController.ProductSearch);
module.exports = router;

