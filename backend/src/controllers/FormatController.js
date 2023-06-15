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
    },

    ListProductsByFormat: async (req, res) => {
        let json = {error:'', result:[]};

        let format = req.params.format;
        let products = await FormatService.ListProductsByFormat(format);

        for(let i in products){
            json.result.push({
                code: products[i].cd_product,
                version : products[i].fk_version,
                format: products[i].fk_format,
                situation: products[i].st_product,
                price: products[i].vl_price,
                added: products[i].dt_added,
                height: products[i].vl_height,
                width: products[i].vl_width,
                length: products[i].vl_length,
                weight: products[i].vl_weight,
                description: products[i].description_product
            });
        }

        res.json(json);
    },

    ListFormat: async (req, res) => {
        let json = {error:'', result:[]};

        let format = req.params.format;
        let artists = await FormatService.ListArtistsByFormat(format);
        let albums = await FormatService.ListAlbumsByFormat(format);
        let versions = await FormatService.ListVersionsByFormat(format);
        let products = await FormatService.ListProductsByFormat(format);

        for(let i in albums){
            
            var artistAux = artists.filter(function(artist){
                return (artist.cd_artist === albums[i].fk_artist);
            });

            var versionAux = versions.filter(function (version) {
                return version.fk_album === albums[i].cd_album;
            });

            let productAux;

            for(let v in versionAux){
                for(let p in products){
                    if(versionAux[v].cd_version === products[p].fk_version)
                        productAux = products[p];
                }
            }

            json.result.push({
                code: albums[i].cd_album,
                albumSlug: albums[i].slug_album,
                albumName: albums[i].nm_album,
                releaseDate: albums[i].dt_album,
                artistName: artistAux[0].nm_artist,
                artistSlug: artistAux[0].slug_artist,
                cover: versionAux[0].img_cover,
                price: parseFloat(productAux.vl_price)
            });
        }

        res.json(json);
    },

}