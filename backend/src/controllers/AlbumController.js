const AlbumService = require('./../services/AlbumService');

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

        let artist = req.params.artist;
        let albums = await AlbumService.ListAlbums(artist);

        for(let i in albums){
            json.result.push({
                code: albums[i].cd_album,
                artist: albums[i].fk_artist,
                slug: albums[i].slug_album,
                name: albums[i].nm_album,
                releaseDate: albums[i].dt_album
            });
        }

        res.json(json);
    }
};