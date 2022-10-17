const ArtistService = require('./../services/ArtistService');

module.exports = {
    ShowArtist: async (req, res) => {
        let json = {error: '', result: []}

        let slug = req.params.slug;
        let artist = await ArtistService.ShowArtist(slug);

        if(artist) json.result = artist;
        
        res.json(json);
    } 
};