"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("item_pedido", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      idPedido: {
        type: DataTypes.BIGINT,
        references: {
          model: {
            tableName: "pedido",
          },
          key: "id",
        },
      },
      idProduto: {
        type: DataTypes.BIGINT,
        references: {
          model: {
            tableName: "produto",
          },
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("item_pedido");
  },
};
