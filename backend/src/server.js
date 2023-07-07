require('dotenv').config({
    path: '.env'
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const server = express();
 server.use(cors());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'https://discography-shop-qyykwrpoz-cddmiasmin.vercel.app');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers",'X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
server.use(bodyParser.urlencoded ({
    extend: false
}))
server.use(express.json());

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`The server is running on http://localhost:${process.env.PORT}`);
});
