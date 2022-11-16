const ImgProductService = require('./../services/ImgProductService');

module.exports = {
    ListImgProductsByAlbum: async (req, res) => {
        let json = {error:'', result:[]};

        let album = req.params.album;
        let images = await ImgProductService.ListImgProductsByAlbum(album);

        for(let i in images){
            json.result.push({
                code: images[i].cd_img_product,
                product: images[i].fk_product,
                image : images[i].url_img_product,
            });
        }

        res.json(json);
    }
}