"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "cliente",
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
        sobrenome: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING(16),
          allowNull: false,
        },
        pseudonimo: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
        },
        senha: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        senhaSalt: {
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
    return queryInterface.dropTable("cliente");
  },
};
