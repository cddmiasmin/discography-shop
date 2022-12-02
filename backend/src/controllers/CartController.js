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
                cartProduct: items[i].fk_product,
                cartAmount: items[i].amount,
                cartTotalValue: items[i].total_value
            }); 
        }

        res.json(json);
    },

    AlterItem: async (req, res) => {
        let json = {error:'', result: {}};
        
        const { code } = req.params;
        const { amount } = req.body;
        const { totalValue } = req.body;

        //console.log(amount, price, code);

        if (code && amount && totalValue) {

            let items = await CartService.AlterItem(code, amount, totalValue);

            json.result = items;

        } else json.error = 'Campos não identificados!';
    

        res.json(json);
    },

    DeleteItem: async (req, res) => {
        let json = {error: '', result: []};
        
        let {code} = req.params;

        let del = await CartService.DeleteItems(code);

        json.result = del;

        res.json(json);
    },

    AddItem: async(req, res) => {
        let json = {error:'', result: {}};
        
        const { client } = req.body;
        const { product } = req.body;
        const { amount } = req.body;
        const { totalValue } = req.body;
    
        if (client && product && amount && totalValue) {

            let item = await CartService.AddItem (
                client, product, amount, totalValue
            );

            json.result = item;

        } else json.error = 'Campos não identificados!';
        
        res.json(json);
    },
}