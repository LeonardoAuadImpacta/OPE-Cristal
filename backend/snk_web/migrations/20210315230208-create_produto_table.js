"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("produto", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produto");
  },
};
