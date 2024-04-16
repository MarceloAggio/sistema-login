const bcrypt = require('bcrypt');
const editarUsuario = require('../models/editarUsuario');

module.exports = {
    async editar(req, res) {
        try {
            const { id } = req.params;
            const usuario = req.body;

            // Se a senha foi fornecida, criptografa a nova senha
            if (usuario.senha) {
                const hashedPassword = await bcrypt.hash(usuario.senha, 10);
                usuario.senha = hashedPassword;
            }

            editarUsuario.update(id, usuario, (err, rowsAffected) => {
                if (err) {
                    console.error('Erro ao editar usuário:', err);
                    return res.status(500).json({
                        success: false,
                        message: 'Erro interno do servidor'
                    });
                }

                if (rowsAffected === 0) {
                    return res.status(404).json({
                        success: false,
                        message: 'Usuário não encontrado'
                    });
                }

                return res.status(200).json({
                    success: true,
                    message: 'Usuário editado com sucesso'
                });
            });
        } catch (error) {
            console.error('Erro ao editar usuário:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }
};
