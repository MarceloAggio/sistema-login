const loginController = require('../controllers/loginController');

module.exports = (app) => {
    app.post('/api/login', loginController.login);
}
