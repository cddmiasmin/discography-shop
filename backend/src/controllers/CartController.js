const CartService = require('./../services/CartService');

module.exports = {

    SearchItems: async (req, res) => {

        let json = {error: '', result: []};
        
        let user = req.params.user;

        let items = await CartService.SearchItems(user)

        for(let i in items){
            json.result.push({
                artistSlug: items[i].slug_artist,
                albumSlug: items[i].slug_album,
                albumName: items[i].nm_album,
                versionDescription: items[i].desc_sm_version,
                versionCover: items[i].img_cover,
                format: items[i].nm_format,
                price: items[i].vl_price,
                cartCode: items[i].cd_cart,
                cartAmount: items[i].amount,
                cartTotalValue: items[i].total_value
            });
        }

        res.json(json);
    },
}