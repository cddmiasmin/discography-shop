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
        
        const { firstName } = req.body;
        const { lastName } = req.body;
        const { birthDate } = req.body;
        const { cpf } = req.body;
        const { telephone } = req.body;
        const { email } = req.body;
        const { password } = req.body;
        
        let user = await ClientService.LoginUser(email);

        console.log(firstName, lastName, birthDate, cpf, telephone, email, password)

        if (firstName && lastName && birthDate && cpf
                && telephone && email && password
        ) {

            if(!user) {

                let newUser = await ClientService.RegisterUser (
                    firstName, lastName, birthDate, cpf, telephone, email, password
                );

                json.result = {
                    message: newUser
                }
            }
            else json.error = 'E-mail já cadastrado no sistema';

        } else json.error = 'Campos não identificados!';
        
        res.json(json);
    },
}