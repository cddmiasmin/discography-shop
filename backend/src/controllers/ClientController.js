const ClientService = require('./../services/ClientService');
const nodemailer = require("nodemailer");

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

    IForgotMyPassword: async(req, res) => {
        let json = {error:'', result: []};
        
        let email = req.params.email;
        let user = await ClientService.SearchUser(email);

        if(user) {

            var transport = nodemailer.createTransport({
                host: process.env.NDM_HOST,
                port: process.env.NDM_PORT,
                auth: {
                    user: process.env.NDM_USER,
                    pass: process.env.NDM_PASS
                }
            });
    
            var message = {
                from: "noreply@cassandra.com",
                to: email,
                subject: "Cassandra | Esqueceu sua senha?",
                text: `Olá ${user.name}, segue a senha cadastrada no sistema: ${user.password} .`,
                html: `<html lang='pt-br'><head><title>Document</title> <style text='text/css'> body { display: flex; position: absolute; justify-content: center; align-items: center; width: 100%; padding: 4vh; flex-direction: column; } p { margin: 1vh; } </style></head><body> <img width='80vh' height='80vh' src='https://i.ibb.co/bHwc08c/logo-dark-light.png' alt='Logo Cassandra' > <h1>RECEBIMENTO DE SENHA</h1> <p>Olá ${user.name},</p> <p>Segue a senha cadastrada no sistema:</p> <b>${user.password}</b></body></html>`
            };
    
            transport.sendMail(message, function (err) {
                if(err) json.error = 'Oops! Tivemos um problema. Tente novamente.';
                res.json(json);
            })
    
            json.result = 'E-mail enviado com sucesso!';

        } else {
            json.error = 'E-mail não cadastrado no sistema!';
        }
        res.json(json);
    },
}