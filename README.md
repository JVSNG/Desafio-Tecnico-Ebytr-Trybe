# Desafio-Tecnico-Ebytr-Trybe
Projeto do evento de blitz de carreira da trybe, consiste na simulação de um desafio técnico em um processo seletivo.
Este projeto é um mvp de uma API Restful de uma Lista de tarefas em node.js com typecript 

## Instruções para utilizar o projeto - Backend
- Ter instalado node na versão latest.
- Dar clone no repositório.
- Você pode rodar somente o backend, para isso
  - Você deve criar um arquivo .env dentro da pasta backend e criar as seguintes varáveis de ambiente:

        PORT= *A porta em que irá rodar o servidor do backend*

        DB_USER= *O nome do seu usuário MySQL*

        DB_PASS= *A senha do seu banco de dados MySQL*

        DB_NAME= *O nome que deseja para o banco de dados que será criado.*

        DB_HOST= *O host do seu banco de dados, Ex.: localhost*

        DB_PORT= *A porta do seu banco de dados*

  - Caso contrário, a API irá rodar com as configurações padrão, pré definidas.
  - Entre na pasta backend, e rode os comandos:

        npm install
        npm start

  - O backend do projeto deve começar a rodar.

## Possíveis Evoluções
Como este é um mvp, o objetivo é entregar algo simples e funcional. Porém, existem algumas mudanças / evoluções que podem ser feitas no projeto para melhorar o resultado:

1. Usar uma tabela de usuários no banco de dados, criando rotas para criação de usuários e de login
      - O login e validação de senha poderia ser feito utilizando a biblioteca Javascript "Bcrypt", para gerar e quebrar hashes para serem guardados no banco de dados com segurança.
      - A autenticação pode ser feita utilizando JWT (Javascript Web Token), gerando um token para o usuário que efetua login, tal token permitiria que o usuário acessasse as suas tarefas específicas. A implementação desse relacionamento entre as duas tabelas é relativamente simples.
2. Criar mais testes unitários, além de testes de integração, aumentando a cobertura de testes.
3. Criar middlewares de validação. Entre eles:
      - Validação do body da requisição para as rotas de criação de tarefas, não permitindo a criação de tarefas sem que todas as informações necessárias sejam passadas no body da requisição.
      - Middleware genérico de erro. Uma das melhores formas de tratar erros em uma API Node.js com express é a utilização de middlewares de erro, esses middlewares recebem mensagens e status de erro, e conseguem retornar uma resposta da API com o erro específico, deixando as tratativas de erro mais elegantes e com menos código repetido.