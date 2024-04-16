const express = require('express');
const http = require('http');
const cors = require('cors');

const cadastroRoutes = require('./routes/cadastroRoutes');
const visualizarUsuarioRoutes = require('./routes/visualizarUsuarioRoutes');
const loginRoutes = require('./routes/loginRoutes');
const editarUsuario = require('./routes/editarUsuarioRoutes');
const deletarUsuario = require('./routes/deletarUsuarioRoutes');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

cadastroRoutes(app);
visualizarUsuarioRoutes(app);
deletarUsuario(app);
editarUsuario(app);
loginRoutes(app);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

app.get('/', (req, res) => {
    res.send('Rota raiz');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('Erro interno do servidor');
});
