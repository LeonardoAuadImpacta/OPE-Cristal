"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      queryInterface.addConstraint(
        "item_carrinho",
        {
          fields: ["idCarrinho"],
          type: "foreign key",
          name: "fk_item_carrinho_carrinho",
          references: {
            table: "carrinho",
            field: "id",
          },
          onDelete: "cascade",
        },
        { transaction: t }
      );
      queryInterface.addConstraint(
        "item_carrinho",
        {
          fields: ["idProduto"],
          type: "foreign key",
          name: "fk_item_carrinho_produto",
          references: {
            table: "produto",
            field: "id",
          },
          onDelete: "cascade",
        },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeConstraint(
        "item_carrinho",
        "fk_item_carrinho_produto"
      ),
      queryInterface.removeConstraint(
        "item_carrinho",
        "fk_item_carrinho_carrinho"
      ),
    ];
  },
};
