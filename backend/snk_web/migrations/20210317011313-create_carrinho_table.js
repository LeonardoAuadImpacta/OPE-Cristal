"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("carrinho", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      idCliente: {
        type: DataTypes.BIGINT,
        references: {
          model: {
            tableName: "cliente",
          },
          key: "id",
        },
      },
      idEndereco: {
        type: DataTypes.BIGINT,
        references: {
          model: {
            tablename: "endereco",
          },
          key: "id",
        },
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("carrinho");
  },
};
