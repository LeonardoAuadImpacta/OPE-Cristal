const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");
const Carrinho = require("./Carrinho");

const Cliente = require("./Cliente");

class Pedido extends Model {}

Pedido.init(
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
    idCarrinho: {
      type: DataTypes.BIGINT,
      references: {
        model: Carrinho,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM({
        values: [
          "COMPLETED",
          "CANCELED",
          "AWAITING_PAYMENT",
          "CONFIRMED",
          "DISPATCHED",
          "IN_TRANSIT",
        ],
      }),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "pedido",
    freezeTableName: true,
    timestamps: true,
  }
);

// the defined model is the class itself
console.log(Pedido === models.Pedido); // true

module.exports = Pedido;
