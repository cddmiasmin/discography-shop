use bd_cassandra;

-- FORMAT 
insert into tb_cassandra_format(nm_format)
	values('CD'), ('CASSETE'), ('BOX'), ('DVD'), ('VINIL');
    
-- ARTIST
insert into tb_cassandra_artist(nm_artist, slug_artist, img_icon)
	values	('Florence And The Machine','florence-and-the-machine','/images/dataArtist/icon/florence-and-the-machine.jpg'),
			('Taylor Swift','taylor-swift','/images/dataArtist/icon/taylor-swift.jpg');

-- ALBUM BY ARTIST 

select cd_artist, nm_artist from tb_cassandra_artist where nm_artist = 'Florence And The Machine';

	insert into tb_cassandra_album(fk_artist, nm_album, slug_album, dt_album)
		values  ('1','Lungs','lungs','2009-07-03'),
				('1','Ceremonials','ceremonials','2011-10-28'),
				('1','How Big, How Blue, How Beautiful','how-big-how-blue-how-beautiful','2015-05-29'),
				('1','High As Hope','high-as-hope','2018-06-29'),
				('1','Dance Fever','dance-fever','2022-05-13');

select cd_artist, nm_artist from tb_cassandra_artist where nm_artist = 'Taylor Swift';
            
	insert into tb_cassandra_album(fk_artist, nm_album, slug_album, dt_album)
		values 	('2','Taylor Swift','taylor-swift','2006-10-24'),
				('2','Fearless','fearless','2008-11-11'),
				('2','Speak Now','speak-now','2010-10-25'),
				('2','Red','red','2012-10-22'),
				('2','1989','1989','2014-10-27'),
				('2','Reputation','reputation','2017-11-10'),
				('2','Lover','lover','2019-08-23'),
				('2','Folklore','folklore','2020-06-24'),
				('2','Evermore','evermore','2020-12-11'),
				('2',"Fearless (Taylor's Version)",'fearless-taylors-version','2021-04-21'),
				('2'," Red (Taylor's Version)",'red-taylors-version','2021-11-12'),
				('2','Midnights','midnights','2022-10-21');