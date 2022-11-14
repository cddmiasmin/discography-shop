create table tb_cassandra_img_product(
    cd_img_product bigint primary key auto_increment,
    fk_product bigint,
    url_img_product varchar(200) not null,
    foreign key (fk_product) references tb_cassandra_product(cd_product)
);