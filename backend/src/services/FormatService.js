const db = require('../db')

module.exports = {
    ListFormats: () => {
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM tb_cassandra_format ', (error, results) => {
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    },

    ListAlbumsByFormat: (format) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_album, fk_artist, nm_album, slug_album, year(dt_album) as 'dt_album' FROM tb_cassandra_album WHERE cd_album in (SELECT fk_album FROM tb_cassandra_version WHERE cd_version in (SELECT fk_version FROM tb_cassandra_product WHERE fk_format = ?))", [format], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result);
                    else accepted(false);
                });
        });
    },

    ListVersionsByFormat: (format) => {
        return new Promise ((accepted, rejected) => {
            db.query("select * FROM tb_cassandra_version WHERE fk_album in (SELECT cd_album FROM tb_cassandra_album WHERE cd_album in (SELECT fk_album FROM tb_cassandra_version WHERE cd_version in (SELECT fk_version FROM tb_cassandra_product WHERE fk_format = ?)))", [format], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result);
                    else accepted(false);
                });
        });
    },

    ListArtistsByFormat: (format) => {
        return new Promise ((accepted, rejected) => {
            db.query("select * from tb_cassandra_artist where cd_artist in (SELECT fk_artist FROM tb_cassandra_album WHERE cd_album in (SELECT fk_album FROM tb_cassandra_version WHERE cd_version in (SELECT fk_version FROM tb_cassandra_product WHERE fk_format = ?)))", [format], 
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