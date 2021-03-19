"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "endereco",
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
        uf: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING(50),
          allowNUll: false,
        },
        rua: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        numero: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        complemento: {
          type: DataTypes.STRING(30),
        },
        cep: {
          type: DataTypes.STRING(10),
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
    return queryInterface.dropTable("endereco");
  },
};
