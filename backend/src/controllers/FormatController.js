const FormatService = require('./../services/FormatService');

module.exports = {
    ListFormats: async (req, res) => {
        let json = {error: '', result: []};

        let formats = await FormatService.ListFormats();

        for(let i in formats){
            json.result.push({
                code: formats[i].cd_format,
                format: formats[i].nm_format
            });
        }

        res.json(json);
    },

    ListAlbumsByFormat: async (req, res) => {
        let json = {error: '', result: []};

        let format = req.params.format;
        let albums = await FormatService.ListAlbumsByFormat(format);

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
    },

    ListVersionsByFormat: async (req, res) => {
        let json = {error:'', result:[]};

        let format = req.params.format;
        let versions = await FormatService.ListVersionsByFormat(format);

        for(let i in versions){
            json.result.push({
                code: versions[i].cd_version,
                album: versions[i].fk_album,
                slug: versions[i].slug_version,
                description: versions[i].desc_sm_version,
                cover: versions[i].img_cover
            });
        }

        res.json(json);
    },

    ListArtistsByFormat: async (req, res) => {
        let json = {error: '', result: []};

        let format = req.params.format;
        let artists = await FormatService.ListArtistsByFormat(format);

        for(let i in artists){
            json.result.push({
                code: artists[i].cd_artist,
                category: artists[i].fk_category,
                slug: artists[i].slug_artist,
                name: artists[i].nm_artist,
                icon: artists[i].url_icon
            });
        }

        res.json(json);
    }
}