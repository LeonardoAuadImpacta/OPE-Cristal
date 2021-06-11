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
          type: DataTypes.STRING,
          allowNull: false,
        },
        subtitulo: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        descricao: {
          type: DataTypes.TEXT,
        },
        precoAtual: {
          type: DataTypes.DECIMAL(8, 2),
          allowNull: false,
        },
        urlImage: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        categoria: {
          type: DataTypes.ENUM({
            values: [
              "Corrida",
              "Skateboarding",
              "Academia",
              "Sportwear",
              "Acessórios",
            ],
          }),
          allowNull: false,
        },
        quantidade: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
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
