const db = require('../config/config');

const DeletarUsuario = {};

DeletarUsuario.delete = (id, result) => {
    const sql = `DELETE FROM users WHERE idUser=?`;

    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Erro no banco de dados', err);
            result(err, null);
        } else {
            result(null, res.affectedRows);
        }
    });
};

module.exports = DeletarUsuario;
