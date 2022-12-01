const AlbumService = require('./../services/AlbumService');
const VersionService = require('./../services/VersionService');
const ArtistService = require('./../services/ArtistService');

module.exports = {

    ProductSearch: async (req, res) => {

        let json = {error: '', result: {
            artists: [],
            albums: []
        }};
        
        let search = req.params.search;

        let artists = await ArtistService.LookForArtists(search);
        let albums = await AlbumService.LookForAlbums(search);


        for(let i in artists) {
            json.result.artists.push({
                code: artists[i].cd_artist,
                slug: artists[i].slug_artist,
                name: artists[i].nm_artist,
                icon: artists[i].url_icon
            });
        }

        for(let i in albums) {
            json.result.albums.push({
                code: albums[i].cd_album,
                albumSlug: albums[i].slug_album,
                albumName: albums[i].nm_album,
                releaseDate: albums[i].dt_album,
                artistName: albums[i].nm_artist,
                artistSlug: albums[i].slug_artist,
                cover: albums[i].img_cover,
            });
        }

        res.json(json);
    },
}