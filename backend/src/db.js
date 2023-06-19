module.exports = function () {
    const mysql = require('mysql2');
    
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });

    connection.connect((error)=>{
        if(error) throw error;
        console.log(`Connected to database: ${process.env.DB_NAME}`);
    });

    return connection;
}
