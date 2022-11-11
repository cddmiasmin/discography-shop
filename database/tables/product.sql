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