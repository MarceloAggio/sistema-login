## Autor - Marcelo Do Nascimento Aggio

## Sobre o Sistema
O sistema é para cadastro, login e administração de usuarios, todas as rotas do backend foram testadas pelo postman, tive dificuldade na hora de criar as rotas do front-end utilizando o RiotJS, por isso tem telas que apenas mostram o status de resposta do backend.

# Sistema de Login usando Riot.js e Node.js

Este repositório contém um sistema de login desenvolvido com Riot.js no front-end e Node.js no back-end.

## Clonando o Repositório

Para clonar este repositório, utilize o seguinte comando:

bash
git clone https://github.com/seuusuario/seurepositorio.git


## Instalando as Dependências

### Front-end (Riot.js)

1. Navegue até o diretório do front-end:

bash
cd front-end


2. Instale as dependências usando npm:

bash
npm install


### Back-end (Node.js)

1. Navegue até o diretório do back-end:

bash
cd back-end


2. Instale as dependências usando npm:

bash
npm install

## Arquitetura do Backend

O backend deste sistema de login foi estruturado seguindo o padrão MVC (Model-View-Controller), com uma arquitetura clara e separada em camadas para facilitar a manutenção e escalabilidade do projeto.

### Model

- Na camada do Model, são definidos os modelos de dados que representam as entidades do sistema. Cada entidade, como Usuário, é representada por um modelo que define sua estrutura e operações relacionadas.

### Controller

- A camada do Controller atua como intermediária entre o Model e as Views. Aqui são implementadas as lógicas de negócio da aplicação, recebendo requisições, processando dados e retornando as respostas apropriadas.

### Routes

- Na camada de Routes, são definidas as rotas da API RESTful que o backend disponibiliza. Cada rota é mapeada para um endpoint específico, indicando qual função do Controller deve ser executada quando uma requisição é feita nesse endpoint.

### Tecnologias Utilizadas

- *Banco de Dados:* Foi utilizado o MySQL como banco de dados para armazenar e gerenciar os dados do sistema.
- *Framework:* O framework Express foi utilizado para construir o backend da aplicação, facilitando a criação de rotas, middlewares e o gerenciamento do servidor web.

Essa estruturação em camadas e o uso do MySQL em conjunto com o Express proporcionam uma base sólida e organizada para o sistema de login desenvolvido neste projeto.


## Rodando o Projeto

### Front-end

1. Dentro do diretório do front-end, inicie o servidor de desenvolvimento:

bash
npm start


2. Acesse o front-end pelo navegador utilizando o seguinte endereço:


http://localhost:4000


### Back-end

1. Dentro do diretório do back-end, inicie o servidor Node.js:

bash
node server.js


2. O back-end estará rodando em:


http://localhost:7000
