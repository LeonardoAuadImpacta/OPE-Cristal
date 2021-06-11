const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

const Produto = require("./Produto");
const Carrinho = require("./Carrinho");

class ItemCarrinho extends Model {}

ItemCarrinho.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: "item_carrinho",
    freezeTableName: true,
    timestamps: true,
  }
);

ItemCarrinho.belongsTo(Produto, { foreignKey: "idProduto" });

module.exports = ItemCarrinho;
