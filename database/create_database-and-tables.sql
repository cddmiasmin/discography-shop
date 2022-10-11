create database bd_cassandra;
use bd_cassandra;

create table tb_cassandra_artist(
	cd_artist bigint primary key auto_increment,
    fk_album bigint,
    nm_artist varchar(50) not null,
    img_icon varchar(1) not null
);

create table tb_cassandra_album(
	cd_album bigint primary key auto_increment,
    fk_version bigint,
    nm_album varchar(60) not null
);

create table tb_cassandra_format(
	cd_format bigint primary key auto_increment,
    nm_format varchar(10)
);

create table tb_cassandra_version(
	cd_version bigint primary key auto_increment,
    fk_version_aux bigint,
    desc_sm_version varchar(20) not null,
    img_cover varchar(1) not null
);

create table tb_cassandra_version_aux(
	cd_version_aux bigint primary key auto_increment,
	vl_price varchar(1) not null,
    img_product numeric(4,2) not null,
    st_version_format boolean not null
);

-- FOREIGN KEY
ALTER TABLE tb_cassandra_artist add 
	foreign key (fk_album) references tb_cassandra_album(cd_album);

drop table tb_cassandra_version_format;