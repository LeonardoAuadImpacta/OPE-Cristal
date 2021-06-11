"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "pedido",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        idCliente: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        idCarrinho: {
          type: DataTypes.BIGINT,
          allowNull: false,
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
          type: DataTypes.STRING,
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
    return queryInterface.dropTable("pedido");
  },
};
