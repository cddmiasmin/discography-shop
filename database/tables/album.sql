create table tb_cassandra_album(
    cd_album bigint primary key auto_increment,
    fk_artist bigint,
    fk_category bigint,
    slug_album varchar(120) not null,
    nm_album varchar(60) not null,
    dt_album timestamp not null,
    foreign key (fk_artist) references tb_cassandra_artist(cd_artist)
);