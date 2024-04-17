import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components.js";

import { register } from 'riot';
import App from './components/App.riot';
import Login from './components/Login.riot';
import Cadastro from './components/Cadastro.riot';

// Registra os componentes
register('app', App);
register('login', Login);
register('cadastro', Cadastro);

// Renderiza o componente App na página
// const mountApp = document.querySelector('#app');
// const app = register('app');
// app.mount(mountApp);    

// register
registerGlobalComponents(App);

// // Monta todos os componentes globais encontrados nesta página
mount("[data-riot-component]");
