const db = require('../db')

module.exports = {
    ListVersionsByArtist: (artist) => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT * FROM tb_cassandra_version WHERE fk_album in (SELECT cd_album FROM tb_cassandra_album WHERE fk_artist = (SELECT cd_artist FROM tb_cassandra_artist WHERE slug_artist = ?))', [artist], 
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

    ListVersionsByAlbum: (album) => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT * FROM tb_cassandra_version WHERE fk_album = ( SELECT cd_album FROM tb_cassandra_album WHERE slug_album = ? )', [album], 
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