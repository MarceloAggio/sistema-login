const Usuario = require('../models/usuario');

module.exports = {
    async visualizar(req, res) {
        try {
            Usuario.getAll((err, usuarios) => {
                if (err) {
                    console.error('Erro ao visualizar usuários:', err);
                    return res.status(500).json({
                        success: false,
                        message: 'Erro interno do servidor'
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Usuários encontrados com sucesso',
                        data: usuarios
                    }); 
                }
            });
        } catch (error) {
            console.error('Erro ao visualizar usuários:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }
};
