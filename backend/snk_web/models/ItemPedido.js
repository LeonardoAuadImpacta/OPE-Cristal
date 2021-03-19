const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

const Pedido = require("./Pedido");
const Produto = require("./Produto");

class ItemPedido extends Model {}

ItemPedido.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    idPedido: {
      type: DataTypes.BIGINT,
      references: {
        model: Pedido,
        key: "id",
      },
    },
    idProduto: {
      type: DataTypes.BIGINT,
      references: {
        model: Produto,
        key: "id",
      },
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precoVenda: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ItemPedido",
  }
);

// the defined model is the class itself
console.log(ItemPedido === models.ItemPedido); // true

module.exports = ItemPedido;
