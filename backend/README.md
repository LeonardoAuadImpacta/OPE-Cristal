# Backend

## Tecnologias
- [NodeJS](https://nodejs.org/): ambiente de execução de JavaScript para server-side
- [Express](https://expressjs.com/): framework web para construção das APIs
- [Passport.js](http://www.passportjs.org/): middleware para autenticações das requisições
- [TypeORM](https://typeorm.io/): biblioteca de ORM para comunicação com BD

## Modelagem de dados
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

## Arquitetura
TODO

## Documentação dos endpoints
TODO
