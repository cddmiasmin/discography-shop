use bd_cassandra; 

select * from tb_cassandra_format;

select * from tb_cassandra_category;

select * from tb_cassandra_artist;

select * from tb_cassandra_version;

select * from tb_cassandra_album;

select * from tb_cassandra_product;

select * from tb_cassandra_img_product;


/* ---------------------- ARTIST */
SELECT * 
FROM tb_cassandra_artist 
WHERE slug_artist = 'adele';

SELECT * 
FROM tb_cassandra_artist 
WHERE cd_artist = 150;

/* ---------------------- ARTISTS */
SELECT *
FROM tb_cassandra_artist
ORDER BY slug_artist asc;

/* ********************** ALBUMS BY ARTIST*/

SELECT * 
FROM tb_cassandra_album 
WHERE fk_artist = 150;

/* --------------------- VERSÃO POR ALBUM */
SELECT *
FROM tb_cassandra_version
WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE nm_album = 'CEREMONIALS');

SELECT *
FROM tb_cassandra_version
WHERE fk_album = 48;

/* --------------------- PRODUTO POR VERSÃO */
SELECT * FROM tb_cassandra_product WHERE fk_version in (SELECT cd_version FROM tb_cassandra_version WHERE fk_album = 40);

SELECT * FROM tb_cassandra_product WHERE fk_version in ( SELECT cd_version FROM tb_cassandra_version WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE slug_album = 'chromatica') );



ALTER TABLE tb_cassandra_product ADD vl_height decimal(5, 2) not null; 
ALTER TABLE tb_cassandra_product ADD vl_width decimal(5, 2) not null;
ALTER TABLE tb_cassandra_product ADD vl_length decimal(5, 2) not null; 	
ALTER TABLE tb_cassandra_product ADD vl_weight decimal(5, 2) not null;


SELECT 
	artist.cd_artist, artist.slug_artist, artist.nm_artist, 
	album.cd_album, album.nm_album, album.slug_album, year(album.dt_album) as 'dt_album',
    versions.cd_version, versions.desc_sm_version, versions.img_cover,
    formats.cd_format, formats.nm_format,
    product.cd_product, product.vl_price, product.st_product, product.dt_added, product.vl_height, product.vl_width, product.vl_length, product.vl_weight, product.description_product,
    img_product.cd_img_product, img_product.url_img_product
FROM 
tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist
							INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album
                            INNER JOIN tb_cassandra_product product ON versions.cd_version = product.fk_version
                            INNER JOIN tb_cassandra_format formats ON formats.cd_format = product.fk_format
                            INNER JOIN tb_cassandra_img_product img_product ON product.cd_product = img_product.fk_product
WHERE cd_album = 37;

SELECT *
from tb_cassandra_album
where dt_album between DATE_SUB(now(), INTERVAL 24 MONTH) and now();


SELECT 
	artist.cd_artist, artist.slug_artist, artist.nm_artist, 
	album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%m/%d/%Y') as 'dt_album',
    versions.cd_version, versions.img_cover
 FROM
tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist
INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album
WHERE
(album.dt_album BETWEEN DATE_SUB(now(), INTERVAL 24 MONTH) AND now());

SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album BETWEEN DATE_SUB(now(), INTERVAL 24 MONTH) AND now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL')
