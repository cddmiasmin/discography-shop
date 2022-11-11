use bd_cassandra;

create table tb_cassandra_artist(
    cd_artist bigint primary key auto_increment,
    slug_artist varchar(100) not null,
    nm_artist varchar(50) not null,
    img_icon varchar(100) not null
);

create table tb_cassandra_category(
    cd_category bigint primary key auto_increment,
    nm_category varchar(20)
);

create table tb_cassandra_album(
    cd_album bigint primary key auto_increment,
    fk_artist bigint,
    fk_category bigint,
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
    slug_version varchar(100) not null,
    desc_sm_version varchar(30) not null,
    img_cover varchar(200) not null,
    foreign key (fk_album) references tb_cassandra_album(cd_album)
);

create table tb_cassandra_product(
    cd_product bigint primary key auto_increment,
    fk_version bigint,
    fk_format bigint,
    st_product boolean not null,
    vl_price decimal(5, 2) not null,
    dt_added timestamp not null,
    foreign key (fk_version) references tb_cassandra_version(cd_version),
    foreign key (fk_format) references tb_cassandra_format(cd_format)
);

create table tb_cassandra_img_product(
    cd_img_product bigint primary key auto_increment,
    fk_product bigint,
    url_img_product varchar(200) not null,
    foreign key (fk_product) references tb_cassandra_product(cd_product)
);