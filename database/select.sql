use bd_cassandra; 

select * from tb_cassandra_format;

select * from tb_cassandra_artist;

select * from tb_cassandra_version;

select * from tb_cassandra_album;

select * from tb_cassandra_product;

select * from tb_cassandra_img_product;

-- ARTIST PROFILE
SELECT * 
FROM tb_cassandra_album
WHERE fk_artist = (SELECT cd_artist FROM tb_cassandra_artist WHERE nm_artist = 'ABBA') 
ORDER BY dt_album asc;

-- VERSION
SELECT *
FROM tb_cassandra_version
WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE nm_album = 'Lungs');



SELECT *
FROM tb_cassandra_product
WHERE fk_version = (SELECT cd_version FROM tb_cassandra_version WHERE fk_album = 2);

DELETE FROM tb_cassandra_product
WHERE cd_product = 12; 

ALTER TABLE tb_cassandra_version DROP COLUMN slug_version;

SELECT *
FROM tb_cassandra_version
WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE cd_album = 5);

SELECT *
FROM tb_cassandra_product
WHERE fk_version = (SELECT cd_version FROM tb_cassandra_version WHERE cd_version = 9);

SELECT * FROM tb_cassandra_version WHERE fk_album in (SELECT cd_album FROM tb_cassandra_album WHERE fk_artist = (SELECT cd_artist FROM tb_cassandra_artist WHERE slug_artist = 'florence-and-the-machine'))