use bd_cassandra; 

select * from tb_cassandra_format;

select * from tb_cassandra_artist;

select * from tb_cassandra_album;

select * from tb_cassandra_version;

select * from tb_cassandra_version_aux;

select * from tb_cassandra_img_prod;

-- ARTIST PROFILE
SELECT * 
FROM tb_cassandra_album
WHERE fk_artist = (SELECT cd_artist FROM tb_cassandra_artist WHERE nm_artist = 'Florence And The Machine') 
ORDER BY dt_album asc;

-- VERSION
SELECT *
FROM tb_cassandra_version
WHERE fk_album = (SELECT cd_album FROM tb_cassandra_album WHERE nm_album = 'Lungs');