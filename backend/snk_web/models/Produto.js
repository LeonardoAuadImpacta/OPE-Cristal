// create table Produto (
// idProduto int primary key, nome varchar(30),
// descricao varchar(45), valorAtual decimal(8,2));
// COMENTAR URL

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

class Produto extends Model {}

Produto.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    precoAtual: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "produto",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Produto;
