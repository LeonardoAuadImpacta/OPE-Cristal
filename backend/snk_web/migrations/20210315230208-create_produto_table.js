"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "produto",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        descricao: {
          type: DataTypes.STRING(255),
        },
        precoAtual: {
          type: DataTypes.DECIMAL(8, 2),
          allowNull: false,
        },
        updatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE,
      },
      {
        hooks: {
          beforeCreate: function (produto, options, fn) {
            cliente.updatedAt = new Date();
            cliente.createdAt = new Date();
            return cliente;
          },
          beforeUpdate: function (produto, options, fn) {
            cliente.updatedAt = new Date();
            return cliente;
          },
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produto");
  },
};
