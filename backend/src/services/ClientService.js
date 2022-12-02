const db = require('../db');

module.exports = {
    LoginUser: (email) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_client as 'code', email, password FROM tb_cassandra_client WHERE email = ?", [email], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result[0]);
                    else accepted(false);
                });
        });
    },

    SearchUser: (email) => {
        return new Promise ((accepted, rejected) => {
            db.query("SELECT cd_client as 'code', nm_first as 'name', email, password FROM tb_cassandra_client WHERE email = ?", [email], 
                (error, result) =>{
                    if(error) {
                        rejected(error); 
                        return;
                    } 

                    if(result.length > 0) accepted(result[0]);
                    else accepted(false);
                });
        });
    },

    RegisterUser: (
        nameFirst, nameLast, birthDate, cpf, telephone, email, password
    ) => {
        return new Promise ((accepted, rejected) => {
            db.query('INSERT INTO tb_cassandra_client(nm_first, nm_last, dt_birth, cpf, telephone, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [nameFirst, nameLast, birthDate, cpf, telephone, email, password],
                (error, results) => {
                    if(error) { 
                        rejected(error); 
                        return; 
                    }
                    accepted('Cadastro realizado com sucesso!'); 
                }
            );
        });
    },
}