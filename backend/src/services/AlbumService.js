const db = require('../db')

module.exports = {
    ShowAlbum: (slug) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_album, fk_artist, nm_album, slug_album, year(dt_album) as 'dt_album' FROM tb_cassandra_album WHERE slug_album = ?", [slug], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result[0]);
                    else accepted(false);
                });
        });
    },

    ListAlbums: (artist) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_album, fk_artist, nm_album, slug_album, year(dt_album) as 'dt_album' FROM tb_cassandra_album WHERE fk_artist = ( SELECT cd_artist FROM tb_cassandra_artist WHERE slug_artist = ?) ORDER BY dt_album asc", [artist], 
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
};