const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: '109.234.161.47',
    user: 'rzgf6652_admin',
    password: 'Karl1991!',
    database: 'rzgf6652_nextjs_auth',
})

module.exports = db;