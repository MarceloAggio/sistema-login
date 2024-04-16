const db = require('../config/config');

const Usuario = {};

Usuario.getAll = (result) => {
    const sql = `SELECT * FROM users`;

    db.query(sql, (err, res) => {
        if (err) {
            console.log('Erro no banco de dados', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Usuario;
