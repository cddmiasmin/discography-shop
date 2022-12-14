require('dotenv').config({
    path: 'variaveis.env'
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded ({
    extend: false
}))
server.use(express.json());

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`The server is running on http://locallhost:${process.env.PORT}`);
});