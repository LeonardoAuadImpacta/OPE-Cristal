"use strict";

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.removeColumn("cliente", "enderecoRua"),
      queryInterface.removeColumn("cliente", "enderecoNumero"),
      queryInterface.removeColumn("cliente", "enderecoComplemento"),
      queryInterface.addColumn("cliente", "pseudonimo", DataTypes.STRING(30), {
        allowNull: false,
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.addColumn("cliente", "enderecoRua", DataTypes.STRING(50), {
        allowNull: false,
      }),
      queryInterface.addColumn(
        "cliente",
        "enderecoNumero",
        DataTypes.STRING(10),
        { allowNull: false }
      ),
      queryInterface.addColumn(
        "cliente",
        "enderecoComplemento",
        DataTypes.STRING(30),
        { allowNull: false }
      ),
      queryInterface.removeColumn("cliente", "pseudonimo")
    );
  },
};
