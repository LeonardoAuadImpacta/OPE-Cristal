# Backend

Servidor web para prover API utilizado no sistema SNK Web.

## Pré-requisitos

Certifique-se de ter o [Node.js® v14.16.0](https://nodejs.org/download/release/v14.16.0/) instalado.

Para o desenvolvimento local, utilizamos o **Docker + docker-compose** para subir instância local de components externos (apenas banco de dados por enquanto).\
Instale essas ferramentas de acordo com seu Sistema Operacional através da documentação oficial:

- [Docker](https://docs.docker.com/engine/install/#desktop)
- [docker-compose](https://docs.docker.com/compose/)

**NVM** \
Recomedo usar o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#install--update-script) pra gerenciar as versões do Node.js.

Na raiz do projeto, execute os seguintes comandos e o Node.js com a versão correta estará disponível no seu terminal:

```bash
nvm install
nvm use
```

## Desenvolvimento

### Scripts

Os scripts devem ser executados da raiz do projeto Node.JS:

```bash
cd snk_web
```

Scripts disponíveis:

- `npm run dev`: inicia servidor web
- `npm run sync-db`: sincroniza entidades no banco de dados de acordo com as Models
- `npm run seed-db`: popula banco de dados com informações de **Produto** e **Cliente**
- `npm run restart-db`: reinicializa o banco de dados com dados (sync-db + seed-db)
- `npm run prettier`: aplica formatação padrão de estilo no código

### Servidor web

Entre na pasta raiz:

```bash
cd snk_web
```

[Opcional] Instale as dependências:

```bash
npm install
```

Para subir o servidor local:

```bash
npm run dev
```

O servidor será inicializado na porta padrão `:3000`, e estará disponível em `localhost:3000`.

Tente acessar `localhost:3000/api/v1` para validar a resposta da raiz da API.

### Banco de dados

Entre na raiz do projeto `cd snk_web` e execute o comando `docker-compose up`.\

A sua instância do MySQL deverá subir e os logs aparecerão na sua sessão do terminal.\

Caso queira deixar a instância rodando em background, adicione "&" ao final do comando: `docker-compose up -d`.

Para conferir se a instância subiu, execute `docker ps`, uma instância com nome `backend_db_1` deverá aparecer.

Para parar a instância execute o comando `docker-compose down`.

## Endpoints

- _/api/v1_

  - _/cliente_

    - _POST_ criação de contas para clientes
      - _request_:
        ```json
        {
          "nome": "Nome",
          "sobrenome": "Sobrenome",
          "genero": "M",
          "dataNascimento": "1990-12-01",
          "senha": "senha123",
          "email": "email@test.com"
        }
        ```
    - _responses_

      - 201: `{}`
      - 400:
        <details>
          <summary>exemplo</summary>

        ```json
        {
          "error": "Invalid payload",
          "details": [
            {
              "msg": "Nome inválido",
              "param": "nome",
              "location": "body"
            },
            {
              "msg": "Sobrenome inválido",
              "param": "sobrenome",
              "location": "body"
            },
            {
              "msg": "Senha deve possuir no mínimo 8 caracteres",
              "param": "senha",
              "location": "body"
            },
            {
              "msg": "Gênero inválido",
              "param": "genero",
              "location": "body"
            },
            {
              "msg": "Data de nascimento inválida",
              "param": "dataNascimento",
              "location": "body"
            },
            {
              "msg": "E-mail inválido",
              "param": "email",
              "location": "body"
            }
          ]
        }
        ```

        </details>

  - _/login_
    - _POST_ autenticação na plataforma
      - _request_
        ```json
        {
          "email": "teste@exemplo.com",
          "senha": "thepasswordhere"
        }
        ```
      - _responses_
        - 200: `{}`
        - 400:
          ```json
          {
            "error": "Invalid payload",
            "details": [
              {
                "msg": "E-mail inválido",
                "param": "email",
                "location": "body"
              },
              {
                "msg": "Senha inválida",
                "param": "senha",
                "location": "body"
              }
            ]
          }
          ```
        - 401:
          ```json
          {
            "error": "Invalid credentials",
            "details": []
          }
          ```

## Tecnologias

- [Node.js®](https://nodejs.org/): ambiente de execução de JavaScript para server-side
- [express](https://expressjs.com/): framework web para construção das APIs
- [express-validator](https://express-validator.github.io/docs/index.html): pacote com interceptors do `express` que ajudam a validar o conteúdo que estamos recebendo no corpo das requisições. \
  Ele por sua é apenas um wrapper em cima das validações existentes no pacote [validator.js](https://github.com/validatorjs/validator.js#validators)
- [Passport.js](http://www.passportjs.org/): middleware para autenticações das requisições
- [Sequelize](https://sequelize.org//): biblioteca de ORM para comunicação com BD
- [Docker](https://docs.docker.com/engine/install/#desktop): conteinerização do ambiente local para facilitar desenvolvimento
- [docker-compose](https://docs.docker.com/compose/install/): ferramenta para facilitar a execução de containers Docker no ambiente local

## Modelagem de dados

<details>
  <summary>Detalhes</summary>

### Entidades

**Cliente**

- id
- nome
- sobrenome
- email
- senha
- senha_salt

**Produto**

- id
- nome
- descrição
- preço_atual

**Pedido**

- id
- cliente (fk)
- desconto
- status [carrinho de compras, pedido realizado, pedido atendido, entregue, cancelado, ...]

**ProdutoPedido**

- id
- id_pedido (fk)
- id_produto (fk)
- quantidade
- preço_venda

## Funcionalidades

- Auto-cadastro do cliente.
- Login.
- Cadastro de produto.
- Abrir o carrinho de compras e colocar itens nele.
- Fechar a venda.
</details>
