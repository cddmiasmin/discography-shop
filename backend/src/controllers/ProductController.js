const ProductService = require('./../services/ProductService');

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
    }
}