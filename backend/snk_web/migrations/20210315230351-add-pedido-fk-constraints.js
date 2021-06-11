"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      queryInterface.addConstraint(
        "pedido",
        {
          fields: ["idCliente"],
          type: "foreign key",
          name: "fk_pedido_cliente",
          references: {
            table: "cliente",
            field: "id",
          },
          onDelete: "cascade",
        },
        { transaction: t }
      );
      queryInterface.addConstraint(
        "pedido",
        {
          fields: ["idCarrinho"],
          type: "foreign key",
          name: "fk_pedido_carrinho",
          references: {
            table: "carrinho",
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
      queryInterface.removeConstraint("pedido", "fk_pedido_cliente"),
      queryInterface.removeConstraint("pedido", "fk_pedido_carrinho"),
    ];
  },
};
