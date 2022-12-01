const db = require('../db')

module.exports = {
    ShowAlbum: (slug) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_album, fk_artist, nm_album, slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album' FROM tb_cassandra_album WHERE slug_album = ?", [slug], 
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
    },

    ListRealesesAlbums: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album BETWEEN DATE_SUB(now(), INTERVAL 24 MONTH) AND now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL')", 
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

    ListPreOrderAlbums: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album > now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL')", 
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

    LookForAlbums: (search) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, year(dt_album) as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') AND (album.nm_album like ?)", ['%' + search + '%'], 
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
};