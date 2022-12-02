use bd_cassandra; 

select * from tb_cassandra_client;

select * from tb_cassandra_cart;

select * from tb_cassandra_format;

select * from tb_cassandra_category;

select * from tb_cassandra_artist order by cd_artist desc;

select * from tb_cassandra_version order by cd_version desc;

select * from tb_cassandra_album order by cd_album desc;

select * from tb_cassandra_product order by cd_product desc;

select * from tb_cassandra_img_product;


/* ---------------------- ARTIST */
SELECT * 
FROM tb_cassandra_artist 
WHERE slug_artist = 'beyonce';

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
SELECT * FROM tb_cassandra_product WHERE fk_version in (SELECT cd_version FROM tb_cassandra_version WHERE fk_album = 35);

SELECT * FROM tb_cassandra_product WHERE fk_version in ( SELECT cd_version FROM tb_cassandra_version WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE slug_album = 'chromatica') );



/* ALTER TABLE tb_cassandra_product MODIFY COLUMN vl_price decimal(13,2);
ALTER TABLE tb_cassandra_product ADD vl_height decimal(5, 2) not null; 
ALTER TABLE tb_cassandra_product ADD vl_width decimal(5, 2) not null;
ALTER TABLE tb_cassandra_product ADD vl_length decimal(5, 2) not null; 	
ALTER TABLE tb_cassandra_product ADD vl_weight decimal(5, 2) not null;*/

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

SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album BETWEEN DATE_SUB(now(), INTERVAL 24 MONTH) AND now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL');

SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, DATE_FORMAT(dt_album, '%Y/%m/%d') as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (album.dt_album > now()) AND (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') ORDER BY album.dt_album asc;

SELECT cd_client as 'code', email, password FROM tb_cassandra_client WHERE email = 'alex.navega@geradornv.com.br';

SELECT * FROM tb_cassandra_artist WHERE nm_artist like '%the%';

SELECT * 
FROM tb_cassandra_album 
WHERE nm_album like '%the%';

SELECT artist.slug_artist, artist.nm_artist, album.cd_album, album.nm_album, album.slug_album, year(dt_album) as 'dt_album', versions.img_cover FROM tb_cassandra_artist artist LEFT JOIN tb_cassandra_album album ON artist.cd_artist = album.fk_artist INNER JOIN tb_cassandra_version versions ON album.cd_album = versions.fk_album WHERE (versions.desc_sm_version = 'CAPA PRINCIPAL' or versions.desc_sm_version = 'PRINCIPAL') AND (album.nm_album like '%?%');

SELECT 
    artist.slug_artist,
    album.nm_album, album.slug_album,
    versions.desc_sm_version, versions.img_cover,
    formats.nm_format,
    product.vl_price,
    cart.cd_cart, cart.amount, cart.total_value
FROM tb_cassandra_cart cart LEFT JOIN tb_cassandra_product product ON cart.fk_product = product.cd_product
                            INNER JOIN tb_cassandra_version versions ON product.fk_version = versions.cd_version
                            INNER JOIN tb_cassandra_format formats ON formats.cd_format = product.fk_format
                            INNER JOIN tb_cassandra_album album ON album.cd_album = versions.fk_album
                            INNER JOIN tb_cassandra_artist artist ON artist.cd_artist = album.fk_artist
WHERE cart.fk_client = 1;

SELECT artist.slug_artist, album.slug_album, banner.* FROM tb_cassandra_promotional_banner banner LEFT JOIN tb_cassandra_album album ON banner.fk_album = album.cd_album INNER JOIN tb_cassandra_artist artist ON artist.cd_artist = album.fk_artist