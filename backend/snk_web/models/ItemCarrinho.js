const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

const Pedido = require("./Pedido");
const Produto = require("./Produto");

class ItemCarrinho extends Model {}

ItemCarrinho.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    idCarrinho: {
      type: DataTypes.BIGINT,
      references: {
        model: Carrinho,
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
    modelName: "ItemCarrinho",
  }
);

// the defined model is the class itself
console.log(ItemCarrinho === models.ItemCarrinho); // true

module.exports = ItemCarrinho;
