"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("pedido", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      idCliente: {
        type: DataTypes.BIGINT,
        references: {
          model: {
            tableName: "cliente",
          },
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pedido");
  },
};
