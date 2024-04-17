const editarUsuarioController = require('../controllers/editarUsuarioController');

module.exports = (app) => {
    app.post('/api/usuarios/editar/:id', editarUsuarioController.editar);
}
