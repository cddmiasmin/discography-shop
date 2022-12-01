const ArtistService = require('./../services/ArtistService');

module.exports = {
    ShowArtist: async (req, res) => {
        let json = {error: '', result: []};

        let slug = req.params.slug;
        let artist = await ArtistService.ShowArtist(slug);

        if(artist) json.result = {
            code: artist.cd_artist,
            category: artist.fk_category,
            slug: artist.slug_artist,
            name: artist.nm_artist,
            icon: artist.url_icon
        };
        
        res.json(json);
    },

    ListArtists: async (req, res) => {
        let json = {error: '', result: []};

        let artists = await ArtistService.ListArtists();

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
    },
};