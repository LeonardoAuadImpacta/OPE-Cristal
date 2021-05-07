// create table Produto (
// idProduto int primary key, nome varchar(30),
// descricao varchar(45), valorAtual decimal(8,2));
// COMENTAR URL

const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/database");

class Produto extends Model {
}

Produto.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        subtitulo: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        precoAtual: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: false,
        },
        urlImage: {
            type: DataTypes.STRING(2048),
            allowNull: false
        },
        categoria: {
            type: DataTypes.ENUM({
                values: ['Corrida', 'Skateboarding', 'Academia', 'Sportwear', 'Acessórios'],
            }),
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        }
    },
    {
        sequelize,
        modelName: "produto",
        freezeTableName: true,
        timestamps: true,
    }
);

module.exports = Produto;
