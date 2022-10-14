use bd_cassandra; 

select * from tb_cassandra_format;

select * from tb_cassandra_artist;

select * from tb_cassandra_album;

-- ARTIST PROFILE
SELECT * 
FROM tb_cassandra_album
WHERE fk_artist = (SELECT cd_artist FROM tb_cassandra_artist WHERE nm_artist = 'Florence And The Machine') 
ORDER BY dt_album asc