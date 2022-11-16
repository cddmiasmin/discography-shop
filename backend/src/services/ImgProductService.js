const db = require('../db')

module.exports = {
    ListImgProductsByAlbum: (album) => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT * FROM tb_cassandra_img_product WHERE fk_product in (SELECT cd_product FROM tb_cassandra_product WHERE fk_version in ( SELECT cd_version FROM tb_cassandra_version WHERE fk_album = ? ));', [album], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result);
                    else accepted(false);
                });
        });
    }
}