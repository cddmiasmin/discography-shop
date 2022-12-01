create table tb_cassandra_cart(
    cd_cart bigint primary key auto_increment,
    fk_client bigint,
    fk_product bigint,
    amount INT not null,
    total_value decimal(13, 2) not null,
    foreign key (fk_client) references tb_cassandra_client(cd_client),
    foreign key (fk_product) references tb_cassandra_product(cd_product)
);