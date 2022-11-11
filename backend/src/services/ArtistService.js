const db = require('../db')

module.exports = {
    ShowArtist: (slug) => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT * FROM tb_cassandra_artist WHERE slug_artist = ?', [slug], 
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

    ListArtists: () => {
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM tb_cassandra_artist ORDER BY slug_artist asc', (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    }
};