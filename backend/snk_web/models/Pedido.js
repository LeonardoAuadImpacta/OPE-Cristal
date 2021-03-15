const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

const Cliente = require("./Cliente");

class Pedido extends Model {}

Pedido.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    idCliente: {
      type: DataTypes.BIGINT,
      references: {
        model: Cliente,
        key: "id",
      },
    },
    desconto: {
      type: DataTypes.DECIMAL(8, 2),
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Pedido",
  }
);

// the defined model is the class itself
console.log(Pedido === models.Pedido); // true

module.exports = Pedido;
