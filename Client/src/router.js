import riot from 'riot';
const { register, route } = riot;

// Importe os componentes associados às rotas
import Login from './pages/login.html';
import Cadastro from './pages/cadastro.html';

export default function configureRoutes() {
  register('login', Login);
  register('cadastro', Cadastro);

  route((collection) => {
    collection('/', 'login'); 
    collection('/cadastro', 'cadastro'); 
  });

  // Inicialize o roteador
  route.start(true);
}
