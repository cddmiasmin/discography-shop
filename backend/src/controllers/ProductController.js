const ArtistService = require('./../services/ArtistService');
const AlbumService = require('./../services/AlbumService');
const VersionService = require('./../services/VersionService');
const ProductService = require('./../services/ProductService');
const ImgProductService = require('./../services/ImgProductService');

module.exports = {
    ListProductsByAlbum: async (req, res) => {
        let json = {error:'', result:[]};

        let album = req.params.album;
        let products = await ProductService.ListProductsByAlbum(album);

        for(let i in products){
            json.result.push({
                code: products[i].cd_product,
                version : products[i].fk_version,
                format: products[i].fk_format,
                situation: products[i].st_product,
                price: products[i].vl_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
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

    ListProductsDetails: async (req, res) => {
        let json = {error:'', 
            result: {
                formats: [],
                artist: [],
                album: [],
                versions: [],
                products: [],
                images: []
        }};

        let artistSlug = req.params.artist;
        let albumSlug = req.params.album;

        let artist = await ArtistService.ShowArtist(artistSlug);
        let album = await AlbumService.ShowAlbum(albumSlug);
        let versions = await VersionService.ListVersionsByAlbum(albumSlug);
        let products = await ProductService.ListProductsByAlbum(album.cd_album);
        let images = await ImgProductService.ListImgProductsByAlbum(album.cd_album);

        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        if(artist) 
            json.result.artist = {
                artistCode: artist.cd_artist,
                artistSlug: artist.slug_artist,
                artistName: artist.nm_artist,
            };

        if(album) {

            let dateOriginal = new Date(album.dt_album);
            let dateFormated = ((dateOriginal.getDate()+"/"+months[(dateOriginal.getMonth())] + "/" + dateOriginal.getFullYear()));

            json.result.album = {
                albumCode: album.cd_album,
                albumName: album.nm_album,
                releaseDate: album.dt_album,
                releaseDateFormated: dateFormated
            };
        } 

        for(let i in versions){
            json.result.versions.push({
                code: versions[i].cd_version,
                slug: versions[i].slug_version,
                description: versions[i].desc_sm_version,
                cover: versions[i].img_cover
            });
        }

        for(let i in products) {

            let dateOriginal = new Date(products[i].dt_added);
            let dateFormated = ((dateOriginal.getDate()+"/"+months[(dateOriginal.getMonth())] + "/" + dateOriginal.getFullYear()));
            
            json.result.products.push({
                code: products[i].cd_product,
                version : products[i].fk_version,
                format: products[i].fk_format,
                situation: products[i].st_product,
                price: products[i].vl_price ,
                added: products[i].dt_added,
                addedFormated: dateFormated,
                height: products[i].vl_height,
                width: products[i].vl_width,
                length: products[i].vl_length,
                weight: products[i].vl_weight,
                description: products[i].description_product
            });
        }

        for(let i in images){
            json.result.images.push({
                code: images[i].cd_img_product,
                product: images[i].fk_product,
                image : images[i].url_img_product,
            });
        }

        res.json(json);
    },
}