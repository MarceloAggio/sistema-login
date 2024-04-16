const DeletarUsuario = require('../models/deletar');

module.exports = {
    async deletar(req, res) {
        try {
            const { id } = req.params;

            DeletarUsuario.delete(id, (err, rowsAffected) => {
                if (err) {
                    console.error('Erro ao deletar usuário:', err);
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
                    message: 'Usuário deletado com sucesso'
                });
            });
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }
};
