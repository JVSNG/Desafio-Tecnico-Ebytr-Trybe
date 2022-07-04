# Desafio-Tecnico-Ebytr-Trybe
Projeto do evento de blitz de carreira da trybe, consiste na simulação de um desafio técnico em um processo seletivo.

## Instruções para utilizar o projeto - Backend
- Ter instalado node na versão latest.
- Ter Docker instalado.
- Ter Docker-Compose instalado
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
