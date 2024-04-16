const deletearUsuarioController = require('../controllers/deletarUsuarioController');

module.exports = (app) => {
    app.delete('/api/usuarios/deletar/:id', deletearUsuarioController.deletar);
}
