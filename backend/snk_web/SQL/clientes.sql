create database Clientes;
use Clientes;
create table Usuario (idUsuario int primary key, email varchar(30),
	senha varchar(16), senha_salt varchar(16));
    
create table AdministradorUsuario (idAdmin int primary key, nome varchar(20));

create table ClienteUsuario (idCliente int primary key, nome varchar(30),
	telefone varchar(16), endereçoRua varchar(40), endereçoNumero int);
    
create table Produto (idProduto int primary key, nome varchar(30),
	descricao varchar(45), valorAtual decimal(8,2));
    
create table Pedido (idPedido int primary key, fkCliente int, desconto decimal(8,2));
alter table Pedido add foreign key(fkCliente) references ClienteUsuario(idCliente);
alter table Pedido add statusPedido int;

create table ItemPedido (idItem int primary key, fkPedido int, fkProduto int,
	quantidade int, valor_do_Pedido decimal(8,2));
alter table ItemPedido add foreign key(fkPedido) references Pedido(idPedido);
alter table ItemPedido add foreign key(fkProduto) references Produto(idProduto);