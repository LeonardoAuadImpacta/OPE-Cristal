const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");
const ItemCarrinho = require("./ItemCarrinho");

class Carrinho extends Model {}

Carrinho.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    idCliente: {
      type: DataTypes.BIGINT,
      references: {
        model: Cliente,
        key: "id",
      },
    },
    idEndereco: {
      type: DataTypes.BIGINT,
      references: {
        model: Endereco,
        key: "id",
      },
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM({
        values: ["OPEN", "SUCCESS", "CANCELED", "EXPIRED"],
      }),
      allowNull: false,
    },
    desconto: {
      type: DataTypes.DECIMAL(8, 2),
    },
    dataExpiracao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "carrinho",
    freezeTableName: true,
    timestamps: true,
  }
);

Carrinho.hasMany(ItemCarrinho, { foreignKey: "idCarrinho", as: "itens" });

module.exports = Carrinho;
