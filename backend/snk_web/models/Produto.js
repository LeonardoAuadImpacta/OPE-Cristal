// create table Produto (
// idProduto int primary key, nome varchar(30),
// descricao varchar(45), valorAtual decimal(8,2));

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

class Produto extends Model {}

Produto.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(255),
    },
    precoAtual: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Produto",
  }
);

// the defined model is the class itself
console.log(Produto === models.Produto); // true

export default Produto;
