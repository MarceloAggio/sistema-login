const visualizarUsuarioController = require('../controllers/visualizarUsuarioController');

module.exports = (app) => {
    app.get('/api/usuarios/visualizar', visualizarUsuarioController.visualizar);
}
