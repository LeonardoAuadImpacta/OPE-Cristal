-- logins
INSERT INTO db.cliente (id, nome, sobrenome, telefone, pseudonimo, email, senha, senhaSalt, updatedAt, createdAt,
                        profile, imgProfile)
VALUES (default, 'Roberto Silva', 'Admin', '11999999999', 'Administrador', 'admin@snk.com', '123456789', '123456789',
        '2021-06-05 00:17:18', '2021-04-06 18:56:54', 'ADMIN',
        'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png');
INSERT INTO db.cliente (id, nome, sobrenome, telefone, pseudonimo, email, senha, senhaSalt, updatedAt, createdAt,
                        profile, imgProfile)
VALUES (default, 'Guilherme', 'Customer', '(11) 99999-9999', 'Cliente', 'customer@snk.com', '123456789', '123456789',
        '2021-06-08 23:45:32', '2021-04-07 21:10:08', 'CUSTOMER',
        'https://scontent.fcgh24-1.fna.fbcdn.net/v/t1.6435-9/132201820_3268809409891472_7251057242668273360_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFE5CCOkkJu-XzWZCR6XbbgCC_25LbR1MUIL_bkttHUxTuzoIBeaQ_db3BqAv4caZ_7VaISYr2mr7CM5QmXg42H&_nc_ohc=3vV5cZ1PbFEAX91u9jC&_nc_ht=scontent.fcgh24-1.fna&oh=82a7ac389135fda5608c2791a250f8d2&oe=60E5F194');

INSERT INTO db.produto (id, nome, subtitulo, descricao, precoAtual, updatedAt, createdAt, urlImage, categoria,
                        quantidade)
VALUES (default, 'Tenis Sapatenis ', 'Polo Bra Masculino Sapatenis ',
        '##O produto tem formato Padrão Brasileiro, Não indicamos comprar um tamanho maior, compre sempre o tamanho que você usa.',
        109.09, '2021-05-10 19:07:41', '2021-05-07 23:50:42',
        'https://http2.mlstatic.com/D_NQ_NP_2X_691843-MLB27049867482_032018-F.webp', 'Corrida', 0);
INSERT INTO db.produto (id, nome, subtitulo, descricao, precoAtual, updatedAt, createdAt, urlImage, categoria,
                        quantidade)
VALUES (default, 'Tenis Street', 'Preto Rosa', 'Um tenis de corrida', 108.79, '2021-06-06 17:47:53', '2021-05-08 00:12:04',
        'https://http2.mlstatic.com/D_NQ_NP_2X_901712-MLB43919697946_102020-F.webp', 'Corrida', 11);
INSERT INTO db.produto (id, nome, subtitulo, descricao, precoAtual, updatedAt, createdAt, urlImage, categoria,
                        quantidade)
VALUES (default, 'Tenis Jb', 'Tenis vermelho 48', 'Tênis patrocinado ', 1989.00, '2021-06-06 16:15:56',
        '2021-06-05 00:16:29', 'https://http2.mlstatic.com/D_NQ_NP_2X_625739-MLB43999097226_112020-F.webp',
        'Skateboarding', 0);
INSERT INTO db.produto (id, nome, subtitulo, descricao, precoAtual, updatedAt, createdAt, urlImage, categoria,
                        quantidade)
VALUES (default, 'Tenis ', 'Tenis', 'aaaa', 10.00, '2021-06-05 00:27:12', '2021-06-05 00:27:12',
        'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-2090-feminino-CT7698-100-1.jpg',
        'Skateboarding', 5);