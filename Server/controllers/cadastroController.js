const bcrypt = require('bcrypt');
const Cadastro = require('../models/cadastro');

module.exports = {
  async register(req, res) {
    try {
      const cadastro = req.body;
      const hashedPassword = await bcrypt.hash(cadastro.senha, 10);
      cadastro.senha = hashedPassword;

      Cadastro.create(cadastro, (err, data) => {
        if (err) {
          return res.status(501).json({
            success: false,
            message: 'Erro ao criar o cadastro no banco',
            error: err
          });
        } else {
          // Redirecionamento para a tela de login em caso de cadastro bem-sucedido
          res.redirect('/login.html'); // Redireciona para a rota /login
        }
      });
    } catch (error) {
      console.error('Erro ao criptografar senha:', error);
      return res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }
};
