"use strict";

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.removeColumn("pedido", "desconto"),
      queryInterface.changeColumn(
        "pedido",
        "status",
        DataTypes.ENUM({
          values: [
            "COMPLETED",
            "CANCELED",
            "AWAITING_PAYMENT",
            "CONFIRMED",
            "DISPATCHED",
            "IN_TRANSIT",
          ],
        })
      ),
      queryInterface.addColumn("pedido", "idCarrinho", DataTypes.BIGINT, {
        references: { model: { tableName: "carrinho" } },
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.addColumn("pedido", "desconto", DataTypes.DECIMAL(8, 2)),
      queryInterface.changeColumn("pedido", "status", DataTypes.INTEGER, {
        allowNull: false,
      }),
      queryInterface.removeColumn("pedido", "idCarrinho")
    );
  },
};
