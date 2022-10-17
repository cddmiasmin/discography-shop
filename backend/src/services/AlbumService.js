const db = require('../db')

module.exports = {
    ShowAlbum: (slug) => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT * FROM tb_cassandra_album WHERE slug_album = ?', [slug], 
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

    ListAlbums: () => {
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM tb_cassandra_album', (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    }
};