"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cliente", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
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
      enderecoRua: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      enderecoNumero: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      enderecoComplemento: {
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
      senhaSalt: {
        type: DataTypes.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cliente");
  },
};
