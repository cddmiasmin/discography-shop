const VersionService = require('./../services/VersionService');

module.exports = {
    ListVersionsByArtist: async (req, res) => {
        let json = {error: '', result: []}

        let artist = req.params.artist;
        let versions = await VersionService.ListVersionsByArtist(artist);

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

    ListVersionsByAlbum: async (req, res) => {
        let json = {error:'', result:[]};

        let album = req.params.album;
        let versions = await VersionService.ListVersionsByAlbum(album);

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
    }
};