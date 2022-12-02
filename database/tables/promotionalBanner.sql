create table tb_cassandra_promotional_banner (
    cd_promotional_banner bigint primary key auto_increment,
    fk_album bigint,
    url_mobile varchar(200) not null,
    url_desktop varchar(200) not null,
    foreign key (fk_album) references tb_cassandra_album(cd_album)
);