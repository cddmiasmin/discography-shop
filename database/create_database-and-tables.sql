create database bd_cassandra;
use bd_cassandra;

create table tb_cassandra_artist(
	cd_artist bigint primary key auto_increment,
    slug_artist varchar(100) not null,
    nm_artist varchar(50) not null,
    img_icon varchar(100) not null
);

create table tb_cassandra_album(
	cd_album bigint primary key auto_increment,
    fk_artist bigint,
    slug_album varchar(120) not null,
    nm_album varchar(60) not null,
    dt_album timestamp not null,
    foreign key (fk_artist) references tb_cassandra_artist(cd_artist)
);

create table tb_cassandra_format(
	cd_format bigint primary key auto_increment,
    nm_format varchar(10)
);

create table tb_cassandra_version(
	cd_version bigint primary key auto_increment,
    fk_album bigint,
    desc_sm_version varchar(20) not null,
    img_cover varchar(200) not null,
    foreign key (fk_album) references tb_cassandra_album(cd_album)
);

create table tb_cassandra_version_aux(
	cd_version_aux bigint primary key auto_increment,
    fk_version bigint,
    fk_format bigint,
	vl_price varchar(1) not null,
    st_version_format boolean not null,
    foreign key (fk_version) references tb_cassandra_version(cd_version),
    foreign key (fk_format) references tb_cassandra_format(cd_format)
);

create table tb_cassandra_img_prod(
	cd_img_prod bigint primary key auto_increment,
    fk_version_aux bigint,
    end_img_prod varchar(100) not null,
     foreign key (fk_version_aux) references tb_cassandra_version_aux(cd_version_aux)
);

drop table tb_cassandra_version_format;