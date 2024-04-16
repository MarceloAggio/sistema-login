const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema-login'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Conectou');
});

module.exports = db;