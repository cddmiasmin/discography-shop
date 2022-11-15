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
WHERE slug_artist = 'katy-perry';

SELECT * 
FROM tb_cassandra_artist 
WHERE cd_artist = 119;

/* ---------------------- ARTISTS */
SELECT *
FROM tb_cassandra_artist
ORDER BY slug_artist asc;

/* ********************** ALBUMS BY ARTIST*/

SELECT * 
FROM tb_cassandra_album 
WHERE fk_artist = 119;

/* --------------------- VERSÃO POR ALBUM */
SELECT *
FROM tb_cassandra_version
WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE nm_album = 'CEREMONIALS');

SELECT *
FROM tb_cassandra_version
WHERE fk_album = 30;

/* --------------------- PRODUTO POR VERSÃO */
SELECT *
FROM tb_cassandra_product
WHERE fk_version = 35;



ALTER TABLE tb_cassandra_product ADD description_product varchar(4000) not null;

ALTER TABLE tb_cassandra_product ADD vl_height decimal(5, 2) not null; 
ALTER TABLE tb_cassandra_product ADD vl_width decimal(5, 2) not null;
ALTER TABLE tb_cassandra_product ADD vl_length decimal(5, 2) not null; 	
ALTER TABLE tb_cassandra_product ADD vl_weight decimal(5, 2) not null;