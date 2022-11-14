create table tb_cassandra_artist(
    cd_artist bigint primary key auto_increment,
    slug_artist varchar(100) not null,
    fk_category bigint,
    nm_artist varchar(50) not null,
    url_icon varchar(100) not null,
    foreign key (fk_category) references tb_cassandra_category(cd_category)
);