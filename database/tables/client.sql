create table tb_cassandra_client(
    cd_client bigint primary key auto_increment,
    nm_first varchar(50) not null,
    nm_last varchar(200) not null,
    dt_birth date not null,
    cpf varchar(15) not null,
    telephone varchar(15) not null,
    email varchar(150) not null,
    password varchar(20) not null
);