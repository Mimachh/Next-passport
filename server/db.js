const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: '',
    user: '',
    password: '',
    database: '',
})

module.exports = db;
