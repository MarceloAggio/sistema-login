const db = require('../config/config');

const Cadastro = {};

Cadastro.create = (cadastro, result) => {
    const sql = `INSERT INTO users(nomeCompleto, email, cpf, senha,fotoDePerfil, tipoPerfil) VALUES (?,?,?,?,?,?)`;

    db.query(
        sql,
        [
            cadastro.nomeCompleto,
            cadastro.email,
            cadastro.cpf,
            cadastro.senha,
            cadastro.fotoDePerfil,
            cadastro.tipoPerfil
        ],
        (err, res) => {
            if (err) {
                console.log('Erro no banco de dados', err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        }
    )
}

module.exports = Cadastro