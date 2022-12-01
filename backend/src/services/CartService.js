const db = require('../db')

module.exports = {
    SearchItems: (user) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, album.nm_album, album.slug_album, versions.desc_sm_version, versions.img_cover, formats.nm_format, product.vl_price, cart.cd_cart, cart.amount, cart.total_value FROM tb_cassandra_cart cart LEFT JOIN tb_cassandra_product product ON cart.fk_product = product.cd_product INNER JOIN tb_cassandra_version versions ON product.fk_version = versions.cd_version INNER JOIN tb_cassandra_format formats ON formats.cd_format = product.fk_format INNER JOIN tb_cassandra_album album ON album.cd_album = versions.fk_album INNER JOIN tb_cassandra_artist artist ON artist.cd_artist = album.fk_artist WHERE cart.fk_client = ?",
                [user], (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result);
                    else accepted(false);
                });
        });
    },
}