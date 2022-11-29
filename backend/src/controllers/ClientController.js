const ClientService = require('./../services/ClientService');

module.exports = {

    LoginUser: async (req, res) => {
        let json = {error:'', result:{}};

        let email = req.params.email;
        let user = await ClientService.LoginUser(email);

        if(user){
            json.result = user;
        }

        res.json(json);
    },

    RegisterUser: async(req, res) => {
        let json = {error:'', result: {}};
        
        let first = req.body.first;
        let last = req.body.last;
        let birth = req.body.birth;
        let cpf = req.body.cpf;
        let telephone = req.body.telephone;
        let email = req.body.email;
        let password = req.body.password;
        
        let user = await ClientService.LoginUser(email);

        if (first && last && birth && cpf
                && telephone && email && password
        ) {

            if(!user) {

                let newUser = await ClientService.RegisterUser (
                    first, last, birth, cpf, telephone, email, password
                );

                json.result = {
                    message: newUser
                }
            }
            else json.error = 'E-mail já cadastrado no sistema';

        } else json.error = 'djsfnjs';
        
        res.json(json);
    },
}