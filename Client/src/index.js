import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components.js";
import configureRoutes from "./router.js"; // Importe o arquivo de roteamento


// register
registerGlobalComponents();

//ROTAS
configureRoutes();

// mount all the global components found in this page
mount("[data-riot-component]");
