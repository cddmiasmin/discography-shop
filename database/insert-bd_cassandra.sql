use bd_cassandra;

-- FORMAT 
insert into tb_cassandra_format(nm_format)
	values('CD'), ('CASSETE'), ('BOX'), ('DVD'), ('VINIL');
    
-- ARTIST
insert into tb_cassandra_artist(nm_artist, slug_artist, img_icon)
	values	('Florence And The Machine','florence-and-the-machine','/images/dataArtist/icon/florence-and-the-machine.jpg'),
			('Taylor Swift','taylor-swift','/images/dataArtist/icon/taylor-swift.jpg');

-- ALBUM
insert into tb_cassandra_album(fk_artist, nm_album, slug_album, dt_album)
		values  ('1','Lungs','lungs','2009-07-03'),
				('1','Ceremonials','ceremonials','2011-10-28'),
				('1','How Big, How Blue, How Beautiful','how-big-how-blue-how-beautiful','2015-05-29'),
				('1','High As Hope','high-as-hope','2018-06-29'),
				('1','Dance Fever','dance-fever','2022-05-13'),
				('2','Taylor Swift','taylor-swift','2006-10-24'),
				('2','Fearless','fearless','2008-11-11'),
				('2','Speak Now','speak-now','2010-10-25'),
				('2','Red','red','2012-10-22'),
				('2','1989','1989','2014-10-27'),
				('2','Reputation','reputation','2017-11-10'),
				('2','Lover','lover','2019-08-23'),
				('2','Folklore','folklore','2020-06-24'),
				('2','Evermore','evermore','2020-12-11'),
				('2',"Fearless (Taylor's Version)",'fearless-taylors-version','2021-04-21'),
				('2',"Red (Taylor's Version)",'red-taylors-version','2021-11-12'),
				('2','Midnights','midnights','2022-10-21');

insert into tb_cassandra_version(fk_album, desc_sm_version, img_cover)
		values  ('1','PRINCIPAL','/images/data/florence-and-the-machine/lungs/main/main.jpg'),
				('1','BETWEEN TWO LUNGS','/images/data/florence-and-the-machine/lungs/between-two-lungs/between-two-lungs.jpg'),
                ('1','EDIÇÃO DO 10° ANIVERSÁRIO','/images/data/florence-and-the-machine/lungs/10th-Anniversary-Edition/10th-Anniversary-Edition');

insert into tb_cassandra_version_aux(fk_version, fk_format, vl_price, st_version_format, dt_version_aux)
		values  ('1','2','100.00','1', 'Cassete'),
				('1','5','150.00','1', 'Vinil'),
                ('2','1','65.00','1','CD Duplo'),
                ('3','3','254.90','1','Vinil + LP + Cartões postais e encartes');
                
insert into tb_cassandra_img_prod(fk_version_aux, end_img_prod)
		values	 ('5','/images/data/florence-and-the-machine/lungs/main/cassette01_01.jpg'),
				 ('5','/images/data/florence-and-the-machine/lungs/main/cassette01_02.jpg'),
                 ('6','/images/data/florence-and-the-machine/lungs/main/vinyl01_01.jpg'),
                 ('6','/images/data/florence-and-the-machine/lungs/main/vinyl01_02.jpg'),
                 ('7','/images/data/florence-and-the-machine/lungs/between-two-lungs/cd01_01.jpg'),
                 ('7','/images/data/florence-and-the-machine/lungs/between-two-lungs/cd01_02.jpg'),
                 ('7','/images/data/florence-and-the-machine/lungs/between-two-lungs/cd01_03.jpg'),
                 ('8', '/images/data/florence-and-the-machine/lungs/10th-Anniversary-Edition/10th-Anniversary-Edition/box01_01.jpg');