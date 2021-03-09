# Backend
Servidor web para prover API utilizado no sistema SNK Web.

## Pré-requisitos
Certifique-se de ter o [Node.js® v14.16.0](https://nodejs.org/download/release/v14.16.0/) instalado.

**NVM** \
Recomedo usar o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#install--update-script) pra gerenciar as versões do Node.js.

Na raiz do projeto, execute os seguintes comandos e o Node.js com a versão correta estará disponível no seu terminal:

```bash
nvm install
nvm use
```

## Desenvolvimento
Execute o comando `npm install` na raiz do projeto para instalar as dependências.

Para subir o servidor local execute `npm run dev`.

O servidor será inicializado na porta padrão `:3000`, e estará disponível em `localhost:3000`.

Tente acessar `localhost:3000/api/v1` para validar a resposta da raiz da API.

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
            "details": [{
              "msg": "E-mail inválido",
              "param": "email",
              "location": "body"
            },{
              "msg": "Senha inválida",
              "param": "senha",
              "location": "body"
            }]
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
- [TypeORM](https://typeorm.io/): biblioteca de ORM para comunicação com BD

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
