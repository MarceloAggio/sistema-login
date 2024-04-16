const db = require('../config/config');

const Login = {};

Login.getByEmail = (email, result) => {
    const sql = `SELECT * FROM users WHERE email = ?`;

    db.query(sql, [email], (err, res) => {
        if (err) {
            console.log('Erro no banco de dados', err);
            result(err, null);
        } else {
            result(null, res[0]); 
        }
    });
};

module.exports = Login;
