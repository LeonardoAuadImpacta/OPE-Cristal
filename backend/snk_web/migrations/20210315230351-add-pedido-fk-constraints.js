"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.transaction((t) => {
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
    queryInterface.sequelize.transaction((t) => {
      queryInterface.removeConstraint("pedido", "fk_pedido_cliente", {
        transaction: t,
      });
      queryInterface.removeConstraint("pedido", "fk_pedido_carrinho", {
        transaction: t,
      });
    });
  },
};
