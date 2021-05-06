INSERT INTO db.cliente (id, nome, sobrenome, pseudonimo, telefone, email, senha, senhaSalt, profile, createdAt,
                        updatedAt)
VALUES (default, 'Test', 'Admin', 'Administrador', '11999999999', 'admin@snk.com', '123456789', '123456789', 'ADMIN',
        '2021-04-06 18:56:54', '2021-04-06 18:56:48');
INSERT INTO db.cliente (id, nome, sobrenome, pseudonimo, telefone, email, senha, senhaSalt, profile, createdAt,
                        updatedAt)
VALUES (default, 'Test', 'Customer', 'Cliente', '11999999999', 'customer@snk.com', '123456789', '123456789', 'CUSTOMER',
        '2021-04-07 21:10:08', '2021-04-07 21:10:13');

INSERT INTO db.endereco (id, idCliente, uf, cidade, bairro, rua, numero, complemento, cep, updatedAt, createdAt)
VALUES (1, (select id from db.cliente where nome = 'Customer'), 'SP', 'São Paulo', 'Jd São Paulo', 'Rua 1', '502', 'casa 3', '08340000', '2021-05-03 18:35:55',
        '2021-05-03 18:35:58');