const db = require('../config/config');

const editarUsuario = {};

editarUsuario.update = (id, usuario, result) => {
    const sql = `UPDATE users SET nomeCompleto=?, email=?, cpf=?, senha=?, tipoPerfil=? WHERE idUser=?`;

    db.query(
        sql,
        [
            usuario.nomeCompleto,
            usuario.email,
            usuario.cpf,
            usuario.senha,
            usuario.tipoPerfil,
            id
        ],
        (err, res) => {
            if (err) {
                console.log('Erro no banco de dados', err);
                result(err, null);
            } else {
                result(null, res.affectedRows);
            }
        }
    );
};

module.exports = editarUsuario;
