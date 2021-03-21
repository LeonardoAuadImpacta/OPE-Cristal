"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "item_carrinho",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        idCarrinho: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        idProduto: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        quantidade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        precoVenda: {
          type: DataTypes.DECIMAL(8, 2),
          allowNull: true,
        },
        updatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE,
      },
      {
        hooks: {
          beforeCreate: function (cliente, options, fn) {
            cliente.createdAt = new Date();
            cliente.updatedAt = new Date();
            fn(null, cliente);
          },
          beforeUpdate: function (cliente, options, fn) {
            cliente.updatedAt = new Date();
            fn(null, cliente);
          },
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("item_carrinho");
  },
};
