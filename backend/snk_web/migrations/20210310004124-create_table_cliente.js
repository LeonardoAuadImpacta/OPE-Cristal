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
        endereco_rua: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        endereco_numero: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        endereco_complemento: {
          type: DataTypes.STRING(30),
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
        senha_salt: {
          type: DataTypes.STRING,
        },
        updated_at: DataTypes.DATE,
        created_at: DataTypes.DATE,
      },
      {
        hooks: {
          beforeCreate: function (cliente, options, fn) {
            cliente.created_at = new Date();
            cliente.updated_at = new Date();
            fn(null, cliente);
          },
          beforeUpdate: function (cliente, options, fn) {
            cliente.updated_at = new Date();
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
