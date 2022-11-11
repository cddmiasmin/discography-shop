create table tb_cassandra_version(
    cd_version bigint primary key auto_increment,
    fk_album bigint,
    slug_version varchar(100) not null,
    desc_sm_version varchar(30) not null,
    img_cover varchar(200) not null,
    foreign key (fk_album) references tb_cassandra_album(cd_album)
);