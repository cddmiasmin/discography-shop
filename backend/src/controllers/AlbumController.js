const AlbumService = require('./../services/AlbumService');
const VersionService = require('./../services/VersionService');
const ArtistService = require('./../services/ArtistService');

module.exports = {
    ShowAlbum: async (req, res) => {
        let json = {error: '', result: []}

        let slug = req.params.slug;
        let album = await AlbumService.ShowAlbum(slug);

        if(album) json.result = album;
        
        res.json(json);
    },

    ListAlbums: async (req, res) => {
        let json = {error:'', result:[]};

        let artistSlug = req.params.artist;
        let artist = await ArtistService.ShowArtist(artistSlug);
        let albums = await AlbumService.ListAlbums(artistSlug);
        let versions = await VersionService.ListVersionsByArtist(artistSlug);

        for(let i in albums){

            var versionAux = versions.filter(function (version) {
                return version.fk_album === albums[i].cd_album;
            });

            json.result.push({
                code: albums[i].cd_album,
                albumSlug: albums[i].slug_album,
                albumName: albums[i].nm_album,
                releaseDate: albums[i].dt_album,
                artistName: artist.nm_artist,
                artistSlug: artist.slug_artist,
                cover: versionAux[0].img_cover
            });
        }

        res.json(json);
    },

    ListRealesesAlbums: async (req, res) => {
        let json = {error: '', result: []}

        let albums = await AlbumService.ListRealesesAlbums();

        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        for(let i in albums) {

            let dateOriginal = new Date(albums[i].dt_album);
            let dateFormated = ((months[(dateOriginal.getMonth())] + "/" + dateOriginal.getFullYear()));

            json.result.push ({
                artistName: albums[i].nm_artist,
                artistSlug: albums[i].slug_artist,
                albumCode: albums[i].cd_album,
                albumSlug: albums[i].slug_album,
                albumName: albums[i].nm_album,
                releaseDate: albums[i].dt_album,
                releaseDateFormated: dateFormated,
                cover: albums[i].img_cover,
            });
        }

        res.json(json);
    },
};