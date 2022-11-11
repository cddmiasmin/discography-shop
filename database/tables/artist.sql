create table tb_cassandra_artist(
    cd_artist bigint primary key auto_increment,
    slug_artist varchar(100) not null,
    nm_artist varchar(50) not null,
    url_icon varchar(100) not null
);