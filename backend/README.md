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
  - _/customer_
    - _POST_ criação de contas para clientes
      - _request_:
        ```json
        {
          "firstName": string,
          "lastName": string,
          "gender": string,
          "password": string,
          "email": string
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
                 "param": "firstName",
                 "location": "body"
               },
               {
                 "msg": "Sobrenome inválido",
                 "param": "lastName",
                 "location": "body"
               },
               {
                 "msg": "Senha deve possuir no mínimo 8 caracteres",
                 "param": "password",
                 "location": "body"
               },
               {
                 "msg": "Gênero inválido",
                 "param": "gender",
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
          "password": "thepasswordhere"
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
              "param": "password",
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
- [Express](https://expressjs.com/): framework web para construção das APIs
- [Passport.js](http://www.passportjs.org/): middleware para autenticações das requisições
- [TypeORM](https://typeorm.io/): biblioteca de ORM para comunicação com BD

## Modelagem de dados

<details>
    <summary>Detalhes</summary>

    User
    - id
    - email
    - password
    - password_salt

    Admin (User)
    - id
    - name

    Customer (User)
    - id
    - name
    - phone
    - address

    Product
    - id
    - name
    - description
    - current_value

    Order
    - id
    - id_customer (fk)
    - discount
    - status [carrinho de compras, pedido realizado, pedido atendido, entregue, cancelado, ...]

    ItemOrder
    - id
    - id_order (fk)
    - id_product (fk)
    - quantity
    - order_value (unitary)

    Funcionalidade:
    - Auto-cadastro do cliente.
    - Login.
    - Cadastro de produto.
    - Abrir o carrinho de compras e colocar itens nele.
    - Fechar a venda.
</details>
