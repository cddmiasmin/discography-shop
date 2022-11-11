const ArtistService = require('./../services/ArtistService');

module.exports = {
    ShowArtist: async (req, res) => {
        let json = {error: '', result: []};

        let slug = req.params.slug;
        let artist = await ArtistService.ShowArtist(slug);

        if(artist) json.result = {
            code: artist.cd_artist,
            slug: artist.slug_artist,
            name: artist.nm_artist,
            icon: artist.img_icon
        };
        
        res.json(json);
    },

    ListArtists: async (req, res) => {
        let json = {error: '', result: []};

        let artists = await ArtistService.ListArtists();

        for(let i in artists){
            json.result.push({
                code: artists[i].cd_artist,
                slug: artists[i].slug_artist,
                name: artists[i].nm_artist,
                icon: artists[i].img_icon
            });
        }

        res.json(json);
    }
};