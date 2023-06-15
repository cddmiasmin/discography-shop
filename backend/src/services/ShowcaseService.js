const db = require('../db')

module.exports = {
    PromotionalBanner: () => {
        return new Promise ((accepted, rejected) => {
            db.query('SELECT artist.slug_artist, album.slug_album, banner.cd_promotional_banner, banner.fk_album, banner.url_mobile, banner.url_desktop FROM tb_cassandra_promotional_banner banner LEFT JOIN tb_cassandra_album album ON banner.fk_album = album.cd_album INNER JOIN tb_cassandra_artist artist ON artist.cd_artist = album.fk_artist', 
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

    PreOrder: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album > now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') LIMIT 12", 
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

    Releases: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album BETWEEN DATE_SUB(now(), INTERVAL 24 MONTH) AND now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') LIMIT 12", 
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

    BestSellers: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, year(dt_album) as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL' RAND() LIMIT 12", 
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

    National: () => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, year(dt_album) as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album < now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') AND (artist.fk_category = 2) ORDER BY RAND() LIMIT 12", 
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
}
