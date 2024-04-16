const editarUsuarioController = require('../controllers/editarUsuarioController');

module.exports = (app) => {
    app.put('/api/usuarios/editar/:id', editarUsuarioController.editar);
}
