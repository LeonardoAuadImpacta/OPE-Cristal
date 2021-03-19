"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "carrinho",
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
        idEndereco: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM({
            values: ["OPEN", "SUCCESS", "CANCELED", "EXPIRED"],
          }),
          allowNull: false,
        },
        desconto: {
          type: DataTypes.DECIMAL(8, 2),
        },
        dataExpiracao: {
          type: DataTypes.DATE,
          allowNull: false,
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
    return queryInterface.dropTable("carrinho");
  },
};
