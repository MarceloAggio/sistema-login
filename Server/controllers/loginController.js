const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Login = require('../models/login');
const JWT_SECRET = process.env.JWT_SECRET;


module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            Login.getByEmail(email, async (err, login) => {
                if (err) {
                    console.error('Erro ao buscar usuário:', err);
                    return res.status(500).json({
                        success: false,
                        message: 'Erro interno do servidor'
                    });
                }

                if (!login) {
                    return res.status(404).json({
                        success: false,
                        message: 'Usuário não encontrado'
                    });
                }

                const senhaCorreta = await bcrypt.compare(senha, login.senha);
                if (!senhaCorreta) {
                    return res.status(401).json({
                        success: false,
                        message: 'Credenciais inválidas'
                    });
                }

                const token = jwt.sign({ id: login.id }, JWT_SECRET, { expiresIn: '1h' });

                return res.status(200).json({
                    success: true,
                    message: 'Login realizado com sucesso',
                    token: token
                });
            });
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }
};
