"use strict";

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.addColumn("produto", "subtitulo", DataTypes.STRING(30), {
        allowNull: false,
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(queryInterface.removeColumn("Produto", "subtitulo"));
  },
};
