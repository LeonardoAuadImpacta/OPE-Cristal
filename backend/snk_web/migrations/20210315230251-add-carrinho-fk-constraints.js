"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      queryInterface.addConstraint(
        "carrinho",
        {
          fields: ["idCliente"],
          type: "foreign key",
          name: "fk_carrinho_cliente",
          references: {
            table: "cliente",
            field: "id",
          },
          onDelete: "cascade",
        },
        { transaction: t }
      );
      queryInterface.addConstraint(
        "carrinho",
        {
          fields: ["idEndereco"],
          type: "foreign key",
          name: "fk_carrinho_endereco",
          references: {
            table: "endereco",
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
      queryInterface.removeConstraint("carrinho", "fk_carrinho_cliente"),
      queryInterface.removeConstraint("carrinho", "fk_carrinho_endereco"),
    ];
  },
};
