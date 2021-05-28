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
    preference_id: {
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: "pedido",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Pedido;
